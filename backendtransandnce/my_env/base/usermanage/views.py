from rest_framework.views import APIView
from rest_framework.response import Response
from django.shortcuts import get_object_or_404, redirect
from django.http import JsonResponse
from rest_framework import status
from django.contrib.auth.models import User
from rest_framework.permissions import IsAuthenticated,AllowAny
from .models import Profile,FriendRequest,Friendship
from rest_framework_simplejwt.tokens import RefreshToken
from .serializers import RegistrationSerializer, LoginSerializer, ProfileSerializer

class RegistrationView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = RegistrationSerializer(data=request.data)
        if serializer.is_valid():
            email = request.data.get('email')
            if User.objects.filter(email=email).exists():
                return Response({"error": "Email already exists"}, status=400)
            user = serializer.save()
            profile = Profile.objects.get(user=user)
            return Response({
                "message": "User registered successfully!",
                "user": {
                    "username": user.username,
                    "email": user.email,
                    "first_name": user.first_name,
                    "last_name": user.last_name,
                },
                "profile": {
                    "bio": profile.bio,
                    "email": profile.email,
                    "first_name": profile.first_name,
                    "last_name": profile.last_name,
                    "avatar": profile.avatar.url if profile.avatar else None,
                    "created_at": profile.created_at,
                }
            }, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class LoginView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.validated_data['user']
            refresh = RefreshToken.for_user(user)
            return Response({
                "message": "Login successful",
                'refresh': str(refresh),
                'access': str(refresh.access_token),
            }, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class ProfileUpdateView(APIView):
    permission_classes = [IsAuthenticated]

    def put(self, request):
        profile = request.user.profile
        serializer = ProfileSerializer(profile, data=request.data, partial=True)

        if serializer.is_valid():
            serializer.save()
            return Response({"message": "Profile updated successfully!", "profile": serializer.data}, status=status.HTTP_200_OK)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class SendFriendRequestView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, user_id):
        sender = request.user
        receiver = get_object_or_404(User, id=user_id)

        if sender == receiver:
            return Response({"error": "You cannot send a friend request to yourself."}, status=status.HTTP_400_BAD_REQUEST)

        friend_request, created = FriendRequest.objects.get_or_create(sender=sender, receiver=receiver)
        if created:
            return Response({"message": "Friend request sent successfully."}, status=status.HTTP_201_CREATED)
        else:
            return Response({"error": "Friend request already sent."}, status=status.HTTP_400_BAD_REQUEST)
    
# def accept_friend_request(APIView):
#     if request.method == 'POST':
#         friend_request = get_object_or_404(FriendRequest, id=friend_request_id)
#         if friend_request.receiver == request.user:
#             friend_request.accepted = True
#             friend_request.save()

#             Friendship.objects.create(user1=friend_request.sender, user2=friend_request.receiver)

#             return JsonResponse({'message': 'Friend request accepted.'}, status=200)
#         return JsonResponse({'message': 'Unauthorized action.'}, status=403)

# def get_friends(user):
#     friendships1 = Friendship.objects.filter(user1=user)
#     friendships2 = Friendship.objects.filter(user2=user)
#     friends = [f.user2 for f in friendships1] + [f.user1 for f in friendships2]
#     return friends

# def friends_list(request, user_id):
#     user = get_object_or_404(User, id=user_id)
#     friends = get_friends(user)
#     return JsonResponse({'friends': [friend.username for friend in friends]}, status=200)

def user_list(request):
    users = User.objects.all()
    data = [{'id': user.id, 'username': user.username, 'email': user.email} for user in users]
    return JsonResponse({'users': data}, status=200)
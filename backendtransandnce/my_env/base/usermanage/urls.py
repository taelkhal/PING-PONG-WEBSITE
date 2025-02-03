from django.urls import path
from .views import RegistrationView, LoginView, ProfileUpdateView, SendFriendRequestView
from . import views

urlpatterns = [
    path('register/', RegistrationView.as_view(), name='register'),
    path('login/', LoginView.as_view(), name='login'),
    path('profile/update/', ProfileUpdateView.as_view(), name='profile-update'),
    path('send_friend_request/<int:user_id>/', SendFriendRequestView.as_view(), name='send_friend_request'),
    path('users/', views.user_list, name='user_list'),
]
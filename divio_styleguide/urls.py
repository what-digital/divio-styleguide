from django.conf.urls import url

from .views import HomeView, FormsView, MessagesView, StaticTemplateView

urlpatterns = [
    url(r'^$', HomeView.as_view(), name='home'),
    url(r'^forms/$', FormsView.as_view(), name='forms'),
    url(r'^messages/$', MessagesView.as_view(), name='messages'),
    url(r'^templates/(?P<template>.+)/$', StaticTemplateView.as_view(), name='template'),
]

from django.conf.urls import patterns, url
from divio_styleguide.views import HomeView, FormsView, MessagesView, StaticTemplateView

urlpatterns = patterns('',
    url(r'^$', HomeView.as_view(), name='divio_styleguide_home'),
    url(r'^forms/$', FormsView.as_view(), name='divio_styleguide_forms'),
    url(r'^messages/$', MessagesView.as_view(), name='divio_styleguide_messages'),
    url(r'^templates/(?P<template>.+)/$', StaticTemplateView.as_view(), name='divio_styleguide_template'),
)

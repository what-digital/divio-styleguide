from django.conf.urls import patterns, url
from divio_styleguide.views import HomeView, DjangoFormView

urlpatterns = patterns('',
    url(r'^$', HomeView.as_view(), name='divio_styleguide_home'),
    url(r'^django-form/$', DjangoFormView.as_view(), name='divio_styleguide_django_form'),
)

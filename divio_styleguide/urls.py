from django.conf.urls import patterns, url
from django.views.generic import TemplateView
from divio_styleguide.views import HomeView

urlpatterns = patterns('',
    url(r'^$', HomeView.as_view(template_name='divio_styleguide/home.html'), name='divio_styleguide_home'),
)

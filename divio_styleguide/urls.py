from django.conf.urls import patterns, url
from django.views.generic import TemplateView

urlpatterns = patterns('',
    url(r'^$', TemplateView.as_view(template_name='divio_styleguide/home.html'), name='divio_styleguide_home'),
)

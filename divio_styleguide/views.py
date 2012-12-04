from django.views.generic import TemplateView

class HomeView(TemplateView):
    template_name = 'divio_syleguide/home.html'

    def get_context_data(self, **kwargs):
        ctx = super(HomeView, self).get_context_data(**kwargs)
        ctx['my_special_context'] = 'Hello!'
        return ctx
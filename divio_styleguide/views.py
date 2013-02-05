from django import forms
from django.views.generic import TemplateView, FormView

class HomeView(TemplateView):
    template_name = 'divio_styleguide/base.html'

    def get_context_data(self, **kwargs):
        ctx = super(HomeView, self).get_context_data(**kwargs)
        ctx['my_special_context'] = 'Hello!'
        return ctx


GENDER_CHOICES = (
    ('m', 'Male'),
    ('f', 'Female'),
)

HOBBIES_CHOICES = (
    ('reading', 'Reading'),
    ('gaming', 'Gaming'),
    ('running', 'Running'),
    ('hiking', 'Hiking'),
    ('procrastinating', 'Procrastinating'),
)

class DjangoForm(forms.Form):
    first_name = forms.CharField(max_length=128)
    last_name = forms.CharField(max_length=128)
    company = forms.CharField(max_length=128, required=False, help_text='This is some help text for this field.')
    gender = forms.ChoiceField(choices=GENDER_CHOICES)
    date_of_birth = forms.DateField()
    email = forms.EmailField()
    hobbies = forms.MultipleChoiceField(choices=HOBBIES_CHOICES, widget=forms.CheckboxSelectMultiple)
    favourite_activity = forms.ChoiceField(choices=HOBBIES_CHOICES, widget=forms.RadioSelect)

class DjangoFormView(FormView):
    template_name = 'divio_styleguide/django_forms.html'
    form_class = DjangoForm
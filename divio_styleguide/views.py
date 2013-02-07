from django import forms
from django.contrib import messages
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
    email = forms.EmailField(help_text='A confirmation email will be sent to this address.')
    hobbies = forms.MultipleChoiceField(choices=HOBBIES_CHOICES, widget=forms.CheckboxSelectMultiple)
    favourite_activity = forms.ChoiceField(choices=HOBBIES_CHOICES, widget=forms.RadioSelect)

    def clean(self):
        cd = super(DjangoForm, self).clean()
        raise forms.ValidationError('This is a non-form error. Something is wrong in the form, please fix.')

class FormsView(FormView):
    template_name = 'divio_styleguide/django/forms.html'
    form_class = DjangoForm

    def form_valid(self, form):
        return self.get(self.request)


MESSAGE_CHOICES = (
    ('success', 'success'),
    ('error', 'error'),
    ('info', 'info'),
    ('warning', 'warning'),
    ('debug', 'debug'),
)

class MessageForm(forms.Form):
    message = forms.CharField(max_length=512, initial='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non nunc ut enim ultrices facilisis. Aliquam sem diam, gravida eu iaculis imperdiet, lacinia non eros.')
    message_type = forms.ChoiceField(choices=MESSAGE_CHOICES)

class MessagesView(FormView):
    template_name = 'divio_styleguide/django/messages.html'
    form_class = MessageForm

    def form_valid(self, form):
        type = form.cleaned_data.get('message_type')
        if type == 'error':
            message_type = messages.ERROR
        elif type == 'info':
            message_type = messages.INFO
        elif type == 'warning':
            message_type = messages.WARNING
        elif type == 'debug':
            message_type = messages.DEBUG
        else:
            message_type = messages.SUCCESS
        messages.add_message(self.request, message_type, form.cleaned_data.get('message'))
        return self.get(self.request)

from cms.app_base import CMSApp
from cms.apphook_pool import apphook_pool
from django.utils.translation import ugettext_lazy as _

class DivioStyleGuideApphook(CMSApp):
    name = _('Divio Style Guide')
    urls = ['divio_styleguide.urls']

apphook_pool.register(DivioStyleGuideApphook)
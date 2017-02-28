from django.utils.translation import ugettext_lazy as _

from cms.app_base import CMSApp
from cms.apphook_pool import apphook_pool


class DivioStyleGuideApphook(CMSApp):
    name = _('Divio Style Guide')
    app_name = 'divio_styleguide'

    def get_urls(self, *args, **kwargs):
        return ['divio_styleguide.urls']

apphook_pool.register(DivioStyleGuideApphook)

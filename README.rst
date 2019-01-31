**Deprecated**

This project is no longer supported.

Divio will undertake no further development or maintenance of this project. If you are interested in  taking responsibility for this project as its maintainer, please contact us via www.divio.com.


=================
Online Styleguide
=================


Installation
------------

#. ensure you have an installed virtualenv
#. run ``. env bin activate`` or ``venv``
#. run ``pip install divio-styleguide``
#. add ``divio_styleguide`` to your ``INSTALLED_APPS``
#. install the "Divio Style Guide" app hook or include ``divio_styleguide.urls`` in ``urls.py``


Usage
-----

Use the html templates within ``divio_styleguide/styleguide/`` to overwrite or add specific features. Try not to modify
the original templates within *includes* or the *base.html* file itself. Add additional components into the *components*
folder.


Templates
---------

This represents an overview of all requested html pages. Those are marked and referenced to through a unique
list-numbering. The templates are fully functional in terms of html, css and javascript but do not include any
backend logic.

Depending on the projects nature, templates might be outdated over time as typography and components advance. They only
serve as references to show how they were initially designed.


Typography
----------

Within typography we define standards such as text sizes, colors, paddings and dynamic behaviours. This can be included
inside a plain text-paragraph or more advanced structures such as tables or forms.

Furthermore we add custom styles that support the layout throughout all templates like leading texts, grid support,
helpers or list types.

We provide a standardized overview of all html functions and essential helpers.


Components
----------

Components are part of a website that are used on multiple occurrences. Some examples include page navigations, boxes or
teasers. Variations of the same element will be provided through descriptive indications.

Unlike typography, this section will be updated permanently as components are added or dropped. Besides the live preview
we also add code examples to easily encourage copy-and-paste.

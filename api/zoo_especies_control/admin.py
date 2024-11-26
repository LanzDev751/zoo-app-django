from django.contrib import admin
from .models import (Habitat, Especie, Guia, 
                     Cuidador, Zona, Itinerario, 
                     EspecieHabitat, GuiaItinerario, CuidadorEspecie)

# Register your models here.
admin.site.register(Habitat)
admin.site.register(Especie)
admin.site.register(EspecieHabitat)
admin.site.register(Guia)
admin.site.register(Cuidador)
admin.site.register(Zona)
admin.site.register(Itinerario)
admin.site.register(GuiaItinerario)
admin.site.register(CuidadorEspecie)
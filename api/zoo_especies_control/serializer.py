from rest_framework import serializers

from .models import (Habitat, Zona, Itinerario, 
                     Guia, Especie, Cuidador, ItinerarioZona, 
                     GuiaItinerario, EspecieHabitat, CuidadorEspecie)

class HabitatSerializer(serializers.ModelSerializer):
    class Meta:
        model = Habitat
        fields = '__all__'

class ZonaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Zona
        fields = '__all__'

class ItinerarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Itinerario
        fields = '__all__'

class GuiaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Guia
        fields = '__all__'

class EspecieSerializer(serializers.ModelSerializer):
    zona_detalles = ZonaSerializer(source='id_zona', read_only=True)
    habitats = serializers.SerializerMethodField()

    class Meta:
        model = Especie
        fields = ['id', 'nombre_espanol', 'nombre_cientifico', 'descripcion', 'estado_conservacion', 'zona_detalles', 'habitats']
    def get_habitats(self, obj):
        especie_habitats = EspecieHabitat.objects.filter(id_especie=obj)
        return HabitatSerializer([eh.id_habitat for eh in especie_habitats], many=True).data

class CuidadorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cuidador
        fields = '__all__'

class ItinerarioZonaSerializer(serializers.ModelSerializer):
    class Meta:
        model = ItinerarioZona
        fields = '__all__'

class GuiaItinerarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = GuiaItinerario
        fields = '__all__'

class EspecieHabitatSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = EspecieHabitat
        fields = '__all__'

class CuidadorEspecieSerializer(serializers.ModelSerializer):
    class Meta:
        model = CuidadorEspecie
        fields = '__all__'
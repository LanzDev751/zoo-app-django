from rest_framework import viewsets
from django.shortcuts import get_object_or_404
from .models import Habitat, Zona, Itinerario, Guia, Especie, Cuidador, ItinerarioZona, GuiaItinerario, EspecieHabitat, CuidadorEspecie
from .serializer import (HabitatSerializer, ZonaSerializer, ItinerarioSerializer, GuiaSerializer, 
                          EspecieSerializer, CuidadorSerializer, ItinerarioZonaSerializer, 
                          GuiaItinerarioSerializer, EspecieHabitatSerializer, CuidadorEspecieSerializer)

#rest_framework modules
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework import status

#Request for habitats
@api_view(['GET'])
@permission_classes([AllowAny])
def get_all_habitats(request):
    habitats = Habitat.objects.all()
    serializer = HabitatSerializer(habitats, many=True)
    return Response(serializer.data)

@api_view(['POST'])
@permission_classes([AllowAny])
def create_new_habitat(request):
    serializer = HabitatSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE'])
@permission_classes([AllowAny])
def habitat_details(request, habitat_id):
    try:
        habitat = Habitat.objects.get(id=habitat_id)
    except Habitat.DoesNotExist:
        return Response(
            {"error": "Habitat not found."}, 
            status=status.HTTP_404_NOT_FOUND
        )
    
    if request.method == 'GET':
        serializer = HabitatSerializer(habitat)
        return Response(serializer.data)
    
    elif request.method == 'PUT':
        serializer = HabitatSerializer(habitat, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        habitat.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

#Request for especies
@api_view(['GET'])
@permission_classes([AllowAny])
def get_all_especies(request):
    especies = Especie.objects.all()
    serializer = EspecieSerializer(especies, many=True)
    return Response(serializer.data)


@api_view(['POST'])
@permission_classes([AllowAny])
def create_new_especies(request):
    serializer = EspecieSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
@permission_classes([AllowAny])
def especie_details(request, especie_id):
    try:
        especie = Especie.objects.get(id=especie_id)
    except especie.DoesNotExist:
        return Response(
            {"error": "Especie not found."}, 
            status=status.HTTP_404_NOT_FOUND
        )
    
    if request.method == 'GET':
        serializer = EspecieSerializer(especie)
        return Response(serializer.data)
    
    elif request.method == 'PUT':
        serializer = EspecieSerializer(especie, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        especie.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
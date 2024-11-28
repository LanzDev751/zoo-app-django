from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from rest_framework.routers import DefaultRouter
from django.urls import path, include
from .views import (get_all_habitats, habitat_details, create_new_habitat,
                    get_all_especies, especie_details, create_new_especies,
                    get_all_zonas, zona_details, create_new_zonas,
                    get_all_itinerarios, itinerario_details, create_new_itinerarios,
                    get_all_guias, guia_details, create_new_guias,
                    get_all_cuidadores, cuidador_details, create_new_cuidadores)

# Configurar un router para las rutas automáticas
router = DefaultRouter()

urlpatterns = [
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('habitats/', get_all_habitats),
    path('habitats/create/', create_new_habitat, name='create_new_habitat'),
    path('habitats/<int:habitat_id>/', habitat_details, name='habitat_details'),
    path('especies/', get_all_especies),
    path('especies/create/', create_new_especies, name='create_new_especies'),
    path('especies/<int:especie_id>/', especie_details, name='especie_details'),
    path('zonas/', get_all_zonas),
    path('zonas/create/', create_new_zonas, name='create_new_zonas'),
    path('zonas/<int:zona_id>/', zona_details, name='zona_details'),
    path('itinerarios/', get_all_itinerarios),
    path('itinerarios/create/', create_new_itinerarios, name='create_new_itinerarios'),
    path('itinerarios/<int:itinerario_id>/', itinerario_details, name='itinerario_details'),
    path('guias/', get_all_guias),
    path('guias/create/', create_new_guias, name='create_new_guias'),
    path('guias/<int:guia_id>/', guia_details, name='guia_details'),
    path('cuidadores/', get_all_cuidadores),
    path('cuidadores/create/', create_new_cuidadores, name='create_new_cuidadores'),
    path('cuidadores/<int:cuidador_id>/', cuidador_details, name='cuidador_details')
]
from django.db import models

# Modelo de Habitat
class Habitat(models.Model):
    id = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=100)
    clima = models.CharField(max_length=50)
    vegetacion = models.CharField(max_length=100)
    continente = models.CharField(max_length=50)

    def __str__(self):
        return self.nombre

# Modelo de Zona
class Zona(models.Model):
    id = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=100)
    extension = models.DecimalField(max_digits=10, decimal_places=2)
    capacidad = models.IntegerField()

    def __str__(self):
        return self.nombre

# Modelo de Itinerario
class Itinerario(models.Model):
    id = models.AutoField(primary_key=True)
    duracion = models.DurationField()
    longitud = models.DecimalField(max_digits=10, decimal_places=2)
    max_visitantes = models.IntegerField()
    num_especies = models.IntegerField()

    def __str__(self):
        return f"Itinerario {self.id}"

# Modelo de ItinerarioZona (relación many-to-many entre Itinerario y Zona)
class ItinerarioZona(models.Model):
    id = models.AutoField(primary_key=True)
    id_zona = models.ForeignKey(Zona, on_delete=models.CASCADE)
    id_itinerario = models.ForeignKey(Itinerario, on_delete=models.CASCADE)

# Modelo de Guia
class Guia(models.Model):
    id = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=100)
    direccion = models.CharField(max_length=200)
    telefono = models.CharField(max_length=15)
    fecha_ingreso = models.DateField()

    def __str__(self):
        return self.nombre

# Modelo de GuiaItinerario (relación many-to-many entre Guia e Itinerario)
class GuiaItinerario(models.Model):
    id = models.AutoField(primary_key=True)
    id_itinerario = models.ForeignKey(Itinerario, on_delete=models.CASCADE)
    id_guia = models.ForeignKey(Guia, on_delete=models.CASCADE)
    horario = models.CharField(max_length=50)

# Modelo de Especie
class Especie(models.Model):
    id = models.AutoField(primary_key=True)
    nombre_espanol = models.CharField(max_length=100)
    nombre_cientifico = models.CharField(max_length=100)
    descripcion = models.TextField()
    estado_conservacion = models.CharField(max_length=50)
    id_zona = models.ForeignKey(Zona, on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.nombre_cientifico

# Modelo de EspecieHabitat (relación many-to-many entre Especie y Habitat)
class EspecieHabitat(models.Model):
    id = models.AutoField(primary_key=True)
    id_habitat = models.ForeignKey(Habitat, on_delete=models.CASCADE)
    id_especie = models.ForeignKey(Especie, on_delete=models.CASCADE)

# Modelo de Cuidador
class Cuidador(models.Model):
    id = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=100)
    direccion = models.CharField(max_length=200)
    telefono = models.CharField(max_length=15)
    fecha_ingreso = models.DateField()

    def __str__(self):
        return self.nombre

# Modelo de CuidadorEspecie (relación many-to-many entre Cuidador y Especie)
class CuidadorEspecie(models.Model):
    id = models.AutoField(primary_key=True)
    id_especie = models.ForeignKey(Especie, on_delete=models.CASCADE)
    id_cuidador = models.ForeignKey(Cuidador, on_delete=models.CASCADE)
    fecha_asignacion = models.DateField()
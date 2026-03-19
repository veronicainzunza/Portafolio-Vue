<template>
    <div class="container my-5">
        <div class="card shadow-lg border-0">
        <div class="row align-items-center g-0">
            
            <!-- Columna texto -->
            <div class="col-12 col-md-6 p-4">
            <p class="lead mb-0">
                {{ descripcion }}
            </p>
            </div>

            <!-- Columna imagen -->
            <div class="col-12 col-md-6 d-flex justify-content-end p-4">
            <img 
                :src="imagen"
                :alt="alt"
                class="img-fluid rounded"
            >
            </div>

        </div>
        </div>
    </div>
</template>

<script setup>
    import imagen from '@/assets/img/foto_cv.jpg'
    const descripcion = `
    Ingeniera en Computación e Informática, con certificaciones en MCSA SQL Server 2014, MCSE Business Intelligence
    y MCSE Data Platform. Experiencia en Dirección y Gestión de Proyectos TI, Data Science, Metodologías Ágiles e ITIL.
    Desarrolladora Full Stack (Python-Django) y Front-End (JavaScript-Vue), Ingles.
    `
    defineProps({
    descripcion: String,
    imagen: String,
    alt: String
    })
</script>
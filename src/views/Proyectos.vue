<template>
    <div class="container mt-5">
        <h2 class="text-center mb-4">Mis Proyectos</h2>

        <div class="row g-4">
        <div
            class="col-md-4"
            v-for="proyecto in proyectos"
            :key="proyecto.id"
        >
            <ProyectoCard :proyecto="proyecto" />
        </div>
        </div>
    </div>
</template>

<script setup>
    import { proyectos } from '../data/proyectos'
    import ProyectoCard from '../components/ProyectoCard.vue'
</script>
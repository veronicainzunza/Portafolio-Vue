<template>
    <div class="card shadow-sm h-100" :class="{ 'opacity-50': !proyecto.activo }">

        <img
            :src="proyecto.imagen"
            class="card-img-top"
            style="height: 200px; object-fit: cover;"
            alt="Imagen del proyecto"
        />

        <div class="card-body d-flex flex-column">
            <h5 class="card-title text-center fw-bold">{{ proyecto.titulo }}</h5>
            <p class="card-text text-center">{{ proyecto.descripcion }}</p>

            <a
                v-if="proyecto.activo"
                :href="proyecto.link"
                target="_blank"
                rel="noopener noreferrer"
                class="btn btn-dark mt-auto"
            >
                Ver Proyecto
            </a>
            <button
                v-else
                class="btn btn-secondary mt-auto"
                disabled
            >
                Próximamente
            </button>
        </div>

    </div>
</template>

<script setup>
    defineProps({
    proyecto: Object
    })
</script>


<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
    
    <router-link class="navbar-brand" to="/">
        Verónica Inzunza
    </router-link>

    <ul class="navbar-nav ms-auto">

        <!-- ACTIVO -->
        <li class="nav-item">
        <router-link 
            to="/" 
            class="nav-link"
        >
            Home
        </router-link>
        </li>

        <!-- ACTIVO -->
        <li class="nav-item">
        <router-link 
            to="/proyectos" 
            class="nav-link"
        >
            Proyectos
        </router-link>
        </li>

        <!-- ACTIVO -->
        <li class="nav-item">
        <router-link 
            to="/habilidades" 
            class="nav-link"
        >
            Habilidades
        </router-link>
        </li>

        <!-- ACTIVO -->
        <li class="nav-item">
        <router-link 
            to="/contacto" 
            class="nav-link"
        >
            Contacto
        </router-link>
        </li>

        <!-- DESACTIVADO -->
        <!-- <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#">Curriculum Vitae</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#">Contacto</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#">Linkedin</a>
        </li> -->

        <!-- DESACTIVADO -->
        <!-- <li class="nav-item">
        <a class="nav-link disabled text-secondary" href="#">
            Contacto
        </a>
        </li> -->

    </ul>

    </div>
</nav>
</template>



<script setup>

</script>

<style scoped>
.router-link-exact-active {
    color: #0d6efd !important; /* Azul Bootstrap */
    font-weight: bold;
}
</style>


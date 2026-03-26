<template>
    <div class="container my-5">
        <div class="card shadow-lg border-0">
        <div class="row align-items-center g-0">
            
            <!-- Columna texto -->
            <div class="col-12 col-md-6 p-4">
            <!-- <p class="lead mb-0">
                {{ descripcion }}
            </p> -->
            <p class="lead mb-0" v-html="descripcion"></p>
            </div>

            <!-- Columna imagen -->
            <div class="col-12 col-md-6 d-flex justify-content-end p-4">
            <img 
                :src="imagen"
                :alt="alt"
                class="img-fluid rounded imagen-bn"
            >
            </div>

        </div>
        </div>
    </div>
</template>

<script setup>
    import imagen from '@/assets/img/mujer_programando.jpg'
    const descripcion = `
        <strong>Lenguajes:</strong> Python (Pandas, Keras, TensorFlow, Pickle), C#, PowerBuilder, HTML, CSS, JavaScript, Bootstrap, JQuery 
        <strong>Frameworks:</strong> Django, Vue
        <strong>Bases de Datos:</strong> SQL Server (Transact-SQL), Oracle (PL/SQL), PostgreSQL 
        <strong>BI y Análisis de Datos:</strong> AWS QuickSight, Power BI, SSIS, SSRS, SSAS, SAP BusinessObjects 
        <strong>Metodologías:</strong> Scrum, Kanban, ITIL 
        <strong>Otros:</strong> GitHub, Bizagi, AWS, Visual Studio 
    `
    defineProps({
    descripcion: String,
    imagen: String,
    alt: String
    })
</script>
<style scoped>
    /* .imagen-bn {
        filter: grayscale(100%);
        transition: filter 0.5s ease;
    }

    .imagen-bn:hover {
        filter: grayscale(0%);
    } */
    .imagen-bn {
    filter: grayscale(100%);
    transition: all 0.5s ease;
    cursor: pointer;
    }

    .imagen-bn:hover {
    filter: grayscale(0%);
    transform: scale(1.05) translateY(-5px);
    box-shadow: 0 10px 25px rgba(0,0,0,0.2);
    }
</style>
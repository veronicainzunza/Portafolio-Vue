<template>
<div class="container my-5">
    <div class="card shadow-lg border-0 p-4">
    
    <h2 class="text-center mb-4">📩 Contáctame</h2>

    <div class="row">
        
        <!-- FORMULARIO -->
        <div class="col-md-6">
            <form @submit.prevent="enviarFormulario">
                
                <div class="mb-3">
                    <label class="form-label">Nombre</label>
                    <input v-model="form.nombre" type="text" class="form-control" required>
                </div>

                <div class="mb-3">
                    <label class="form-label">Correo</label>
                    <input v-model="form.email" type="email" class="form-control" required>
                </div>

                <div class="mb-3">
                    <label class="form-label">Mensaje</label>
                    <textarea v-model="form.mensaje" class="form-control" rows="4" required></textarea>
                </div>

                <button class="btn btn-dark w-100">
                    Enviar mensaje
                </button>

            </form>
        </div>

        <!-- REDES SOCIALES -->
        <div class="col-md-6 d-flex flex-column justify-content-center align-items-center">
        
        <h5 class="mb-3">También puedes encontrarme en:</h5>

        <div class="d-flex gap-4 redes">
            
            <a href="https://github.com/veronicainzunza" target="_blank">
            <i class="bi bi-github"></i>
            </a>

            <a href="https://www.linkedin.com/in/verónica-inzunza-8a8203176" target="_blank">
            <i class="bi bi-linkedin"></i>
            </a>

            <a href="mailto:v_inzunza_tapia@gmail.com">
            <i class="bi bi-envelope-fill"></i>
            </a>

        </div>

        </div>

    </div>

    </div>
</div>
</template>

<script setup>
import { reactive } from 'vue'
import emailjs from '@emailjs/browser'

const form = reactive({
    nombre: '',
    email: '',
    mensaje: ''
})

const enviarFormulario = () => {
emailjs.send(
    'service_e42maub',   // ← tu Service ID
    'template_i4hsdso',  // ← tu Template ID
    {
    nombre: form.nombre,
    email: form.email,
    mensaje: form.mensaje
    },
    'dXKV3pSaOly3KGepa' // ← tu Public Key
)
.then(() => {
    alert('Mensaje enviado!!')

    form.nombre = ''
    form.email = ''
    form.mensaje = ''
})
.catch((error) => {
    console.error(error)
    alert('Error al enviar!!')
})
}
</script>

<style scoped>
.redes i {
    font-size: 2rem;
    color: #333;
    transition: all 0.3s ease;
}

.redes i:hover {
    color: #0d6efd;
    transform: scale(1.2);
}
</style>
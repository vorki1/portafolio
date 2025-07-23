<template>
    <v-row class="container-contact align-center">
        <v-col cols="12" md="5" class="text-sombreado">
            <h2 class="text-h5 mb-4">Contáctame</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus adipisci reiciendis, quia consequuntur dignissimos mollitia possimus, fugiat corporis quasi reprehenderit ad aliquid officia voluptate optio tempora magnam. Doloremque, maiores numquam!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus adipisci reiciendis, quia consequuntur dignissimos mollitia possimus, fugiat corporis quasi reprehenderit ad aliquid officia voluptate optio tempora magnam. Doloremque, maiores numquam!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus adipisci reiciendis, quia consequuntur dignissimos mollitia possimus, fugiat corporis quasi reprehenderit ad aliquid officia voluptate optio tempora magnam. Doloremque, maiores numquam!</p>
        </v-col>
        <v-col cols="12" md="7">
            <p class="text-h5 text-destacado espaciado">Ingeniero Civil En Computación E Informática</p>
            <p class="text-h4 espaciado">Javier Ignacio Saldaño Hernández</p>
            <p class="text-body-1 text-destacado">javier.saldano.hernandez@gmail.com</p>
            <p class="text-body-1 text-destacado">+56 9 37001905</p>
            <div class="espaciado">
                <v-btn 
                icon 
                href="https://www.linkedin.com/in/javier-salda%C3%B1o-hern%C3%A1ndez-b77b52232/" 
                target="_blank"
                class="style-icons">
                    <img width="50" height="50" src="https://img.icons8.com/color/48/linkedin.png" alt="linkedin"/>
                </v-btn>
                <v-btn 
                icon 
                href="https://github.com/vorki1" 
                target="_blank"
                class="style-icons">
                    <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/github.png" alt="github"/>
                </v-btn>
            </div>
        </v-col>
    </v-row>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'ContactoPersonal',
});
</script>

<style scoped>
.container-contact {
    margin: 20px;
}
.text-destacado {
    color: rgba(218, 165, 32, 0.8);
}
.text-sombreado{
    box-shadow: 0 4px 8px rgba(218, 165, 32, 0.8);
}
.espaciado {
    margin: 20px;
}
.style-icons{
    background-color: rgba(34, 34, 34, 1);
    margin: 10px;
    
}
</style>
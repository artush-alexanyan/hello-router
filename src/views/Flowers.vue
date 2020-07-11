<template>
    <div class="details">
        <div class="container">
            <div class="jumbotron">
                <h3 class="text-center text-warning mt-3">Flower's</h3>
            </div>
            <main>
                <div class="container-fluid">
                    <div class="row">
                    <div 
                        class="col-sm-4" 
                        v-for="flower in flowers" 
                        :key="flower.id"
                        >
                        <div class="card">
                        <img class="card-img-top" :
                            src="flower.image" 
                            alt="Card image cap"
                            >
                        <div class="card-block">
                            <h4 class="card-title text-center"> {{ flower.name }} </h4>
                            <p class="card-text text-center mb-3">
                                <b>Some quick example text to build </b>
                            </p>
                        </div>
                        <div class="card-block">
                            <router-link 
                                tag="button" 
                                :to="{name: 'Details', params: {id: flower.id}}" 
                                class="btn btn-success btn-block"
                                >
                                View
                            </router-link>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
    data: () => {
        return {

        }
    },
    computed: {
        ...mapState(['flowers'])
    }
}
</script>

<style scoped>
.card-img-top{
    height: 190px;
}
.card{
    padding: 20px;
    margin: 5px;
}
</style>
<template>
    <div class="details">
        <div class="container">
            <h3 class="text-center mt-3">Flower's details</h3>
            <hr>
            <h5 class="text-center text-danger">This flower's id is:  <strong>{{ id }}</strong> </h5>
            <main>
             <div class="container-fluid">
                    <div class="row">
                    <div class="col-sm-4 mt-5">
                        <div class="card">
                            <img class="card-img-top" 
                                :src="getFlower.image" 
                                alt="Card image cap">
                            <div class="card-block">
                                <h4 class="card-title text-center"> {{ getFlower.name }} </h4>
                                <p class="card-text text-center pb-3">
                                    <b> Some quick example text to build </b>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm mt-5">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci placeat atque deleniti aperiam error quas aliquid, ab est totam asperiores, iure culpa veniam facere dolore, itaque nemo delectus earum ratione dicta libero porro recusandae quod officia ducimus. Voluptates dignissimos ipsam suscipit commodi explicabo, repellendus nostrum animi ipsa? Ea perferendis officiis a quidem ipsum nisi, enim nam earum voluptate ex architecto est nemo beatae iure libero commodi deserunt molestiae adipisci mollitia, inventore numquam aliquid nesciunt ipsam. Inventore animi totam labore quaerat soluta tempora aperiam, in ad, velit ipsa nisi hic optio numquam reiciendis error aut culpa quisquam quasi sit doloribus facilis.</p>
                    </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    props: [
        'id',
    ],
    data: () => ({
        
    }),
    computed: {
        ...mapState(['flowers']),
        getFlower () {
            return this.flowers.find(flower => flower.id === this.$route.params.id)
        }
    }
}
</script>
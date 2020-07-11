<template>
    <div class="secret">
        <div class="container">
            <div class="jumbotron">
                <h3 class="h3 text-center text-danger">Secret page:)</h3>
            </div>
            <div>
              <img src="@/assets/heart.jpg" class="rounded mx-auto d-block" alt="">    
            </div>
            <div class="jumbotron">
                <h3 class="h3 text-center text-danger">I love you. I alwais will!</h3>
                <h4 class="h3 text-center text-success">Have a nice weekend!</h4>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: () => {
        return {
            password: 'Artush'
        }
    },
    beforeRouteEnter (to, from, next) {
        const user = prompt('Please enter the key:', '')
        const password = 'Artush'
        if(user == password) {
            next()
        }else{
            next(false)
        }
    },
    beforeRouteLeave (to, from, next) {
        const answer = window.confirm('Do you really want to leave?')
        if (answer) {
            next()
        } else {
            next(false)
        }
    }
}
</script>

<style scoped>
img{
    height: 200px;
    width: 300px;
}
</style>
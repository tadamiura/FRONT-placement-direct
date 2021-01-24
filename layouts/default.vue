<template>
  <div>
    <div>
      <b-nav>
        <b-nav-item :to="{ name: 'index' }">Accueil</b-nav-item>
        <b-nav-item :to="{ name: 'myAccount' }">Mon profil</b-nav-item>
        <b-nav-item :to="{ name: 'login' }">Login</b-nav-item>
      </b-nav>
    </div>
    <div class="container mt-3 pt-3">
      <Nuxt /> 
    </div>
  </div>
</template>
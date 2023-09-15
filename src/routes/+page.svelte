<script>
    import { SliceZone } from '@prismicio/svelte'
    import { components } from '$lib/slices' 
    import { PrismicImage } from "@prismicio/svelte"
    export let data
</script>

<section class="flip-card">
    <div class="flip-card-inner">

      <div class="flip-card-front" >
        <PrismicImage class="logo" field={data.logo} imgixParams={{ auto: false }}/>
      </div>

      <div class="flip-card-back">
        <PrismicImage class="avatar" field={data.mugshot} imgixParams={{ auto: false }}/>
        <h1>{data.name}</h1>
        <p>{data.nickname}</p>
        <hr>
        <div class="contact-info">
          <h2>Contact</h2>
          <a href="#">saschadavidson1@gmail.com</a>
          <a href="#">06 11 48 04 03</a>
          <a href="#">saschadavidson.nl</a>
          <a href="#">Mijn gitHub profiel</a>
        </div>
        <hr>
        <h2>Bio</h2>
        <p></p>
      </div>

    </div>
  </section>
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
          <a href="{data.gmail}">{data.link_gmail}</a>
          <a href="{data.phonenummer}">{data.link_phonenummer}</a>
          <a href="{data.website}">{data.link_website}</a>
          <a href="{data.github}">{data.link_github}</a>
        </div>
        <hr>
        <h2>{data.bio_title}</h2>
        <p>{data.bio_tekst}</p>
      </div>

    </div>
  </section>
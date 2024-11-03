<script lang="ts">
  type Options = 'one-way' | 'return'

  function getDate() {
    const date = new Date()
    const [month, day, year] = date
      .toLocaleString('en-US', {year: 'numeric', month: '2-digit', day: '2-digit'})
      .split('/')
    
    return `${year}-${month}-${day}`
  }

    
  function handleSubmit(e: Event) {
    e.preventDefault()
    alert(`Lefoglaltad a kiválasztott ${selected} járatot. ${startDate}`)
  }

  let selected = $state<Options>('one-way')
  let startDate = $state(getDate)
  let returnDate = $state(getDate)

  $inspect({selected, startDate, returnDate})
  
</script>

<form onsubmit={handleSubmit} class="grid-gap">
  <select bind:value={selected}>
    <option value="one-way">Csak oda.</option>
    <option value="return">Visszaút is!</option>
  </select>
  
<br>
  <label>
    <span class="sr-only">Indulás:</span>
    <input type="date" bind:value={startDate} required/>
  </label>
<br>
  <label>
    <span class="sr-only">Érkezés:</span>
    <input type="date" bind:value={returnDate} disabled={selected !== 'return'} required/>
  </label>
<br>
  <button type="submit" disabled={!startDate || (selected === 'return' && returnDate < startDate)}>
    Foglalás
  </button>
</form>
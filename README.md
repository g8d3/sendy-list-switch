# sendy-list-switch

Switch sendy list:

```html
<script src='switch-lists-sendy.js' />
<script>
 SwitchList('.to-switch', function(params){
  if(params.utm_source == 'facebook') return 'id1';
  if(params.utm_source == 'google') return 'id2';
 });
 
 // by default uses '.to-switch' and utm_source
 SwitchList({facebook: 'id1' , google: 'id2'});
</script>
<form class='to-switch'>
...
</form>
```

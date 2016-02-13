# sendy-list-switch

Switch sendy list:

```html
<script type="text/javascript" src='https://code.jquery.com/jquery-2.2.0.min.js'></script>
<script type="text/javascript" src='http://cdn.rawgit.com/juanpastas/sendy-list-switch/master/main.js'></script>
<script>
 // this version not working yet
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

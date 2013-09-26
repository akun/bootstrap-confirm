# bootstrap-confirm jQuery plugin

## Getting Started

Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/akun/bootstrap-confirm/master/dist/jquery.bootstrap-confirm.min.js
[max]: https://raw.github.com/akun/bootstrap-confirm/master/dist/jquery.bootstrap-confirm.js

In your web page:

```html
<link href="bootstrap.css" rel="stylesheet">
<script src="jquery.js"></script>
<script src="bootstrap.min.js"></script>
<script src="bootstrap-confirm.min.js"></script>
<script>
jQuery(function($) {
  $('#confirm').bootstrapConfirm(); // default is AJAX POST
});
</script>
```

## Documentation
_(Coming soon)_

## Examples

```html
<!DOCTYPE html>
<html>
<head>
  <script src="http://code.jquery.com/jquery-1.10.2.min.js"></script>
  <link href="http://getbootstrap.com/2.3.2/assets/css/bootstrap.css" rel="stylesheet">
  <script src="http://getbootstrap.com/2.3.2/assets/js/bootstrap.min.js"></script>
  <script src="https://raw.github.com/akun/bootstrap-confirm/master/dist/jquery.bootstrap-confirm.min.js"></script>
  <script>
  $(document).ready(function(){
    $('.delete').bootstrapConfirm();
  });
  </script>
</head>
<body>

<div class="container">
  <h1><a href="/user/delete/1/" class="delete">删除</a></h1>
</div>

<div id="confirm" class="modal hide fade">
  <div class="modal-header">
    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
    <h3>提示</h3>
  </div>
  <div class="modal-body">
    <p>确认删除</p>
  </div>
  <div class="modal-footer">
    <a href="#" class="btn btn-primary" data-confirm="modal">确认</a>
    <a href="#" class="btn" data-dismiss="modal">取消</a>
  </div>
</div>
</body>
</html>
```

## Release History

0.0.1 - confirm before post

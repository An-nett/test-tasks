<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Captcha</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="captcha">
        <?php
            $text = null;
            for ($i = 0; $i < 5; $i++) {
                $text = $text . rand(0,9);
            }
            $filename = "text.gif";
            exec("magick convert -background white -fill black -font Stylus-BT -pointsize 80 label:$text $filename");
            
        ?>

        <img class="captcha__img" src="<?= $filename ?>" alt="captcha">
    </div>
</body>
</html>




    



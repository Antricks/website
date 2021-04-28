<!Doctype HTML>

<html lang="de">

<head>
    <meta charset="utf-8">
    <link rel="stylesheet" type="text/css" href="/css/style.css">
    <title>Blog Articles | Antricks</title>

    <meta name="title" content="Blog Articles | Antricks">
    <meta name="description" content="Some of the things I did, CTF, hardware or some other cyber stuff...">

	<meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
    <div class="card title">
        <h1 class="center big-margin-top">Articles</h1>
        <p class="center">Some of my projects, CTF writeups, hardware or some other cyber stuff...</p>
    </div>
    
    <div class="card">
        <div class="articles">
            <?php 
            function endsWith($string, $endString) {
                $len = strlen($endString);
                if ($len == 0) {
                    return true;
                }
                return (substr($string, -$len) === $endString);
            }

            $article_dirs = array_reverse(glob("articles/*/"));

            foreach($article_dirs as $article_dir) {

                $article_related_files = glob($article_dir . "*");

                foreach($article_related_files as $article_related_file) {

                    if(endsWith($article_related_file, "article.json")) {

                        $article_data_file = $article_related_file;
                        continue;
                    }
                }

                if(isset($article_data_file)) {
                    $article_data_string = file_get_contents($article_data_file);
                    $article_data = json_decode($article_data_string);
                }

                if(isset($article_data)) {
                    echo "<a class=\"no-hover-colorfx\" href=\"". $article_dir ."article.html\"><div class=\"article-entry\">";

                    if(isset($article_data->image)) {
                        echo "<img class=\"article-image\" src=\"" . $article_data->image . "\">";
                    }
                    
                    if(isset($article_data->title)) {
                        echo "<h3 class=\"article-title\">" . $article_data->title . "</h3>";
                    }

                    if(isset($article_data->author)) {
                        echo "<div class=\"article-author\">" . $article_data->author . "</div>";
                    }

                    if(isset($article_data->date)) {
                        echo "<div class=\"article-date\">" . $article_data->date . "</div>";
                    }

                    echo "</div></a>";
                    echo "<hr class=\"dashed\">";
                }

                unset($article_data);
            }
            ?>
        </div>
    </div>
</body>
</html>

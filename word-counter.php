<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <title>A Word Counter Created With PHP</title>
        <link href="styles/main.css" type="text/css" rel="stylesheet" />
    </head>
    <body>
        <?php
            if ($_SERVER['REQUEST_METHOD'] === "POST") {    // If user has submitted the form, handle the data
                $textArray = explode(' ', $_POST['text']);
                // $hashTextArray = [];
                $hashTextArray = array();
                foreach ($textArray as $key => $value){
                    if($hashTextArray[$value]){
                        $hashTextArray[$value] += 1;
                    } else {
                        $hashTextArray[$value] = 1;
                    }
                }
            }
        ?>
        <section>
            <h1>Word Counter</h1>
            <p>Enter text into the input below to see the prevalance of each word.</p>
            <form method="POST" action="word-counter.php">
                <p id="errorMsg"></p>
                <input type="text" name="text" />
                <button>Submit</button>
            </form>
            <div>
                <?php
                    foreach($hashTextArray as $key => $value){
                        echo "$key: $value<br />";
                    }
                ?>
            </div>
                
        </section>
        <footer>
            &copy; 2015 Tom Tillistrand
        </footer>
        <script src="scripts/validate.js" type="text/javascript"></script>
    </body>
</html>
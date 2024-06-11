<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://bootswatch.com/5/lumen/bootstrap.min.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Sigmar+One&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="main.css">
    <title>Livres</title>
</head>

<body>

    <?php include ("navbar.php") ?>

    <div class="container">
        <h1 class="border border-dark m-2 p-2 rounded text-center">Page listant les livres</h1>
        <div>
            <table class="table text-center monTableau" id="tableauLivres">
                <thead>
                    <tr class="table-dark" id="titresColonne">
                    <th>Titre</th>
                    <th>Auteur</th>
                    <th>Nombre de pages</th>
                    <th colspan="2">Actions</th>
                </tr>
                </thead>
                <tbody> </tbody>
                
                </table>
            </table>
            <button onClick="ajoutFormulaire()" class="btn btn-success w-100">Ajouter</button>

        </div>
        <form id="ajoutForm" class="d-none">
            <fieldset>
                <legend>Ajout d'un livre</legend>
                <div class="form-group">
                    <label for="titre">Titre du livre</label>
                    <input type="text" class="form-control" id="titre">
                </div>
                <div class="form-group">
                    <label for="titre">Auteur</label>
                    <input type="text" class="form-control" id="auteur">
                </div>
                <div class="form-group">
                    <label for="titre">Nombre de pages</label>
                    <input type="number" class="form-control" id="pages">
                </div>
                <button class="btn btn-primary" id="validationFormAjout">Ajouter</button>
            </fieldset>
        </form>

        <form id="modifForm" class="d-none">
            <fieldset>
                <legend>Modification d'un livre</legend>
                <div class="form-group">
                    <label for="titre">Titre du livre</label>
                    <input type="text" class="form-control" id="titre">
                </div>
                <div class="form-group">
                    <label for="titre">Auteur</label>
                    <input type="text" class="form-control" id="auteur">
                </div>
                <div class="form-group">
                    <label for="titre">Nombre de pages</label>
                    <input type="number" class="form-control" id="pages">
                </div>
                <input type="hidden" id="idLivre" value="">
                <button class="btn btn-primary" id="validationFormModif">Modifier</button>
            </fieldset>
        </form>
    </div>

    <script src="js/main.js"></script>
</body>

</html>
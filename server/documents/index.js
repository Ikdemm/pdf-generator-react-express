module.exports = (data) => {
    return `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8">
            <title>Proposal for ${data.applicantFirstName}</title>
            <link rel="stylesheet" href="./documents/styles.css">
            <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
        </head>
        <body>

            <h1>Hello Mr ${data.applicantFirstName}</h1>

        </body>
    </html>
    `
}
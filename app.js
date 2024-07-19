'use strict';

< !DOCTYPE html >
    <html lang="ar">
        <head>
            <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>تغيير الألوان</title>
                    <style>
                        body {
                            font - family: Arial, sans-serif;
                        text-align: center;
                        margin: 0;
                        padding: 0;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 100vh;
                        background-color: #f4f4f4;
        }

                        #color {
                            font - size: 2em;
                        margin-bottom: 20px;
        }

                        #btn {
                            padding: 10px 20px;
                        font-size: 1em;
                        background-color: #3498db;
                        color: white;
                        border: none;
                        cursor: pointer;
        }

                        #btn:hover {
                            background - color: #2980b9;
        }
                    </style>
                </head>
                <body>
                    <div id="color">#f4f4f4</div>
                    <button id="btn">تغيير اللون</button>

                    <script>
        // تحديد الألوان الممكنة
                        const colors = ["#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#33FFF6"];

                        // اختيار العناصر من الصفحة
                        const colorDiv = document.getElementById("color");
                        const btn = document.getElementById("btn");

                        // دالة لتوليد لون عشوائي من المصفوفة
                        function getRandomColor() {
            const randomIndex = Math.floor(Math.random() * colors.length);
                        return colors[randomIndex];
        }

                        // إضافة مستمع الحدث للنقر على الزر
                        btn.addEventListener("click", function() {
            const newColor = getRandomColor();
                        document.body.style.backgroundColor = newColor;
                        colorDiv.textContent = newColor;
        });
                    </script>
                </body>
            </html>

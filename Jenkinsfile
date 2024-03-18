pipeline {
    agent any

    stages {
        stage('Build and Archive') {
            steps {
                // Создаем каталог для артефактов, если он еще не существует
                sh 'mkdir -p build'
                
                // Копируем файл app.py в каталог build
                sh 'cp app.py build/'

                // Заархивируем файл app.py
                archiveArtifacts artifacts: 'build/app.py', fingerprint: true
            }
        }
    }
}

pipeline {
    agent any

    stages {
        stage('Build and Archive') {
            steps {
                // Копируем файл app.py в каталог с артефактами
                sh 'cp app.py ${WORKSPACE}/app.py'
                // Заархивируем каталог с артефактами
                archiveArtifacts artifacts: 'app.py', fingerprint: true
            }
        }
    }
}

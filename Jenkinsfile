pipeline {
    agent any

    stages {
        stage('Execute file') {
            steps {
                // Создаем каталог для артефактов, если он еще не существует
                sh './app.py'
            }
        }
        stage {
            steps {
                archiveArtifacts artifacts: '**/*', excludes: ''
            }
        }
}

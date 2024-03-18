groovy
pipeline {
    agent any

    stages {
        stage('Run Code') {
            steps {
                // Выполнить ваш код или скрипт
                sh 'python app.py'

                // Переместить или скопировать результаты выполнения в каталог 'results'
                sh 'mkdir -p results'
                sh 'mv result_file.txt results/'

                // Архивировать каталог 'results'
                archiveArtifacts artifacts: 'results/*', fingerprint: true
            }
        }
    }
}

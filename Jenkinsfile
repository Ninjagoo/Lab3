pipeline {
  agent any
  stages {
    stage('print text') {
      steps {
        sh """
          echo 'Hello!'
        """
      }
    }
  }
  steps {
                // Архивируем файлы для дальнейшего использования
      archiveArtifacts artifacts: '**/dist/*', fingerprint: true
  }
}

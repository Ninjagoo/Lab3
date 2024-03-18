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
    stage('archive file') {
      steps {
        archiveArtifacts artifacts: '**/dist/*', fingerprint: true
      }
    }
  }
}

pipeline {
  agent any
  stages {
    stage('Run Python script') {
      steps {
        script {
          sh 'python app.py &'
      }
      }
    }
    stage('archive file') {
      steps {
        archiveArtifacts artifacts: 'Jenkinsfile', fingerprint: true
      }
    }
  }
}

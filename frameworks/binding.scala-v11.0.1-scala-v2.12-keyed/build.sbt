enablePlugins(SbtWeb)

lazy val js = project

scalaJSProjects += js

pipelineStages in Assets += scalaJSPipeline

scalaVersion in Global := "2.12.3"

scalacOptions in Global += "-optimise"

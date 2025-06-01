CREATE TABLE IF NOT EXISTS trend_queries (
  id INT NOT NULL AUTO_INCREMENT,
  use_case VARCHAR(255),
  sector VARCHAR(255),
  demand VARCHAR(255),
  selected_trend VARCHAR(255),
  trend_solutions TEXT,
  trend_assessment TEXT,
  radar_positioning TEXT,
  pestel_tag TEXT,
  market_solution TEXT,
  partners TEXT,
  confidence_score FLOAT,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS user_feedback (
  id INT NOT NULL AUTO_INCREMENT,
  trend_id INT,
  user_name VARCHAR(255),
  comment TEXT,
  rating INT,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  FOREIGN KEY (trend_id) REFERENCES trend_queries(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS agentic_logs (
  id INT NOT NULL AUTO_INCREMENT,
  action VARCHAR(255),
  detail TEXT,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS autonomous_learning (
  id INT NOT NULL AUTO_INCREMENT,
  trend_data TEXT,
  validation_results TEXT,
  success_metrics TEXT,
  timestamp DATETIME,
  confidence_score FLOAT,
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

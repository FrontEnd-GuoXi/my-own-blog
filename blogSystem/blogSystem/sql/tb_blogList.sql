
ALTER TABLE test_table ADD COLUMN `is_staff` tinyint(2) NOT NULL DEFAULT '0' COMMENT '是否是从业人员 0否 1是' AFTER `valid_status`;


-- 设置表中的某个字段为外键
ALTER TABLE tb_bloglist ADD CONSTRAINT `username` FOREIGN KEY (`username`) REFERENCES tb_user(`username`);

-- 更改表中的主键字段
ALTER TABLE tb_bloglist DROP PRIMARY KEY ,ADD PRIMARY KEY ( username);

-- 删除某个字段
ALTER TABLE tb_bloglist DROP COLUMN username;


ALTER TABLE tb_bloglist ADD FOREIGN KEY user_id_fk (id) REFERENCES tb_user (id);
/*
Navicat MySQL Data Transfer

Source Server         : mydata
Source Server Version : 50725
Source Host           : localhost:3306
Source Database       : itpm

Target Server Type    : MYSQL
Target Server Version : 50725
File Encoding         : 65001

Date: 2019-06-02 09:38:06
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `admin`
-- ----------------------------
DROP TABLE IF EXISTS `admin`;
CREATE TABLE `admin` (
  `admin_id` varchar(8) NOT NULL,
  `admin_name` varchar(50) NOT NULL,
  `admin_pwd` varchar(50) NOT NULL,
  PRIMARY KEY (`admin_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of admin
-- ----------------------------
INSERT INTO `admin` VALUES ('12312312', '梁', '111111');

-- ----------------------------
-- Table structure for `ban`
-- ----------------------------
DROP TABLE IF EXISTS `ban`;
CREATE TABLE `ban` (
  `ban_id` int(11) NOT NULL AUTO_INCREMENT,
  `ban_word` varchar(100) NOT NULL,
  PRIMARY KEY (`ban_id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of ban
-- ----------------------------
INSERT INTO `ban` VALUES ('1', '社会主义');
INSERT INTO `ban` VALUES ('3', '马克思');
INSERT INTO `ban` VALUES ('11', '恩格斯');

-- ----------------------------
-- Table structure for `case_enshrine`
-- ----------------------------
DROP TABLE IF EXISTS `case_enshrine`;
CREATE TABLE `case_enshrine` (
  `user_id` varchar(10) NOT NULL,
  `case_id` int(11) NOT NULL,
  UNIQUE KEY `case_inshrine_pk` (`user_id`,`case_id`),
  KEY `case_id` (`case_id`),
  CONSTRAINT `case_id` FOREIGN KEY (`case_id`) REFERENCES `case_info` (`case_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of case_enshrine
-- ----------------------------
INSERT INTO `case_enshrine` VALUES ('12312312', '8');
INSERT INTO `case_enshrine` VALUES ('1511240128', '8');
INSERT INTO `case_enshrine` VALUES ('12312312', '9');
INSERT INTO `case_enshrine` VALUES ('1511240134', '15');

-- ----------------------------
-- Table structure for `case_info`
-- ----------------------------
DROP TABLE IF EXISTS `case_info`;
CREATE TABLE `case_info` (
  `case_id` int(11) NOT NULL AUTO_INCREMENT,
  `case_type` int(11) NOT NULL,
  `case_title` varchar(100) NOT NULL,
  `case_content` text NOT NULL,
  `case_answer` text,
  `case_ctime` datetime NOT NULL,
  `case_media_path` varchar(100) DEFAULT NULL,
  `case_ppt` varchar(100) DEFAULT NULL,
  `media_type` int(11) DEFAULT NULL,
  `case_enshrine_num` int(11) DEFAULT NULL,
  `case_author` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`case_id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of case_info
-- ----------------------------
INSERT INTO `case_info` VALUES ('8', '1', 'IT项目的特点与规划', '<p>【案例1】考虑下列问题：</p><p>Ø&nbsp;编辑一个版报纸</p><p>Ø&nbsp;在火星上投放机器人设备搜索生命迹象</p><p>Ø&nbsp;准备结婚</p><p>Ø&nbsp;改进财务计算机系统以处理通用的欧币问题</p><p>Ø&nbsp;开发优秀人机界面的研究项目</p><p>Ø&nbsp;对用户使用计算机系统时出现的问题的原因进行调查</p><p>Ø&nbsp;为计算领域学生分配第二年的编程任务</p><p>Ø&nbsp;为一台新计算机编制操作系统</p><p>Ø&nbsp;在组织中安装新版本的字处理软件包</p><p>其中，有些用“项目”描述可能比其他更合适。把它们按照最接近你的构成项目的概念的顺序排列起来，越在上面，越符合“项目”的概念。并说明与上一条作为项目的不同点。</p>', '<p>【参考答案1.1】答案不唯一，一种可能的顺序如下：</p><p>Ø&nbsp;在火星上投放机器人设备搜索生命迹象</p><p>Ø&nbsp;为一台新计算机编制操作系统</p><p>Ø&nbsp;改进财务计算机系统以处理通用的欧币问题</p><p>Ø&nbsp;在组织中安装新版本的字处理软件包</p><p>Ø&nbsp;对用户使用计算机系统时出现的问题的原因进行调查</p><p>Ø&nbsp;准备结婚</p><p>Ø&nbsp;开发优秀人机界面的研究项目</p><p>Ø&nbsp;编辑一个版报纸</p><p>Ø&nbsp;为计算领域学生分配第二年的编程任务</p>', '2019-04-06 12:07:52', 'https://itmp-1259164243.cos.ap-guangzhou.myqcloud.com/team3.mp4', 'http://ppdzfcm6e.bkt.clouddn.com/jQueryxin.pptx', '1', '3', 'lemon');
INSERT INTO `case_info` VALUES ('9', '2', ' IT项目的立项与评价', '<p>【案例2】评论一下下面对软件开发者的“目的”的用词是否适当：</p><p>⑴在预算内按时实现新的应用。</p><p>⑵实现新的软件应用，并尽可能地只有少量可能导致运行故障的软件错误。</p><p>⑶设计一个用户友好系统。</p><p>⑷为新系统编写充分的文档。</p><p><br></p><p>【问题讨论1】&nbsp;关于项目章程和项目经理委派书</p><p>【问题讨论2】项目经理在参与售前支持阶段活动的过程中，由于所处的立场不同，有时候会和销售经理的意见发生冲突。这种情况如何处题？</p><p>【问题讨论3】有时候在合同还没有正式签订的时候，客户就提出提前进行项目的实施的要求。这种情况如何处理？</p><p>【问题讨论4】&nbsp;降价对项目成本预算的影响</p>', '<p>【参考答案2.1】在每种情况下要提出的意见和疑问是：</p><p>⑴实际时间和预算量要详细说明到什么样的程度？最终期限和预算约束通常必须按要交付功能的范围和质量来设置。例如：如果最终期限无法达到，那么客户愿意延期而要求交付完整的功能集，还是在最终期限时交付基本的功能子集？</p><p>⑵“尽可能地只有少量错误”并不准确。去掉错误需要工作量，因而需要钱。如果花许多钱和时间去减少错误，开发人员愿意吗？</p><p>⑶“用户友好”实际意味着什么？如何度量？通常“易于使用”是按用户执行标准操作所花的时间来度量的，而“易于学习”是按初学者在执行标准操作时达到精通的程度所花的时间来度量的。</p><p>⑷“充分的”文档意味着什么？也许用目标格式编排表示法来产生文档类型列表更有用。</p><p><br></p><p>【问题讨论1】&nbsp;关于项目章程和项目经理委派书</p><p>项目章程和项目经理委派是一份文件吗？是在合同签订之前发布呢？还是合同签订之后发布?通常在组织中由谁发布?</p><p>【参考答案】项目章程的主要内容是宣布项日正式开始实施并强调项目所需达到的目标。项目经理委派书的主要内容是对已经宣布要实施的项目正式委派项目经理并明确其权力，有时候项目中其他关键角色的人选也在此文件中进行委派和授权。这两份文件通常在合同签订之后发布，但是由于某种情况公司同意在合同签订之前就开始项目的实施时，则在做出这种提前实施的决定之后就应该马上发布项目章程和项目经理委派书。通常，这两份文件由项目管理部门的经理发布；对那些级别很高或者有特殊意义的项目，则由公司的管理高层发布。有时候，项目经理委派书中的内容可以合并在项目章程中一起发布。</p><p>【问题讨论2】</p><p>&nbsp;&nbsp;&nbsp;项目经理在参与售前支持阶段活动的过程中，由于所处的立场不同，有时候会和销售经理的意见发生冲突。这种情况如何处题？</p><p>【参考答案】项目经理参与售前活动的目的是为项目的成功实施做好铺垫，同时通过自己的项目经验尽最大可能帮助销售经理赢得合同。一般来讲，项目经理和销售经理在配合当中发生冲突的主要原因是山于各自的立场不同造成的：销售经理的主要职责是完成销售额，项目经理的主要职责是完成既定的项目目标。在售前活动中，销售经理为了获取订单，容易做出不切实际的承诺，包括在进度方面、价格方面、性能方面等的承诺；而项目经理着重于日后项目的可执行性，所以对方案中不太现实的地方会据理力争，提出反对意见，以致造成冲突。针对这种情况，应该从以下几个方面进行考虑：</p><p>⑴统一目标&nbsp;无论项目经理还是销售经理,在售前活动中都要表现出团队合作的精神,不要只考虑白己的小团队利益,也不能只考虑眼前利益。大家的最终目标其实是一致的，即服务客户、让客户满意。</p><p>(2)群策群力&nbsp;&nbsp;对于出现的问题，大家应该集思广益、群策群力，寻找积极的解决方案，而不是互相推诿。</p><p>⑶在公司的流程中，扩大销售经理和项目经理的职责范围, 项目经理应该参与合同签订之前的工作,销售经理的职责也应该延伸到合同签订之后。有的公司在考评销售经理的绩效时包括了订单额、预期利润额、实际利润额、应收款项等诸多指标、通过这种方法保证项目的可实施性和公司业务的良性循环。</p><p>【问题讨论3】</p><p>&nbsp;&nbsp;&nbsp;有时候在合同还没有正式签订的时候，客户就提出提前进行项目的实施的要求。这种情况如何处理？</p><p>【参考答案】讨论：这种情况的发生有一定的普遍性，通常是出于以下几种原因：</p><p>Ø&nbsp;客户对卖方的产品或服务没有使用经验，不放心。希望能先“看货”，再决定“买还是不买”。</p><p>Ø&nbsp;客户已经选定了卖方，但是出于内部复杂的合同审批手续，使得合同签署不能马上完成。但是项目的工期要求又迫在眉睫，不得不要求提前实施。</p><p>Ø&nbsp;客户业务需求非常急迫，比如一些扩容项目，不马上提供相应的产品或服务，就有可能影响到他们的用户，或者是造成很大的经济损失。</p><p>⑴在上述第一种情况中存在的风险较大，客户可能会对你所交付的产品和服务不满意而拒绝和你继续签订合同，导致你在前期的投入无法撤回而遭受损失。但是当今激烈的市场竞争又使你不得不去冒险，否则从一开始你就放弃了被选择的机会。在这种情况下，可以通过积极引导客户参观以往成功案例等方式增强客户的信心。另外一方面，公司内部相关人员要通过分析市场、客户等诸多因素，决定是否接受客户提前实施的要求，如果一旦决定，要明确提前实施的成本的底线值，项目经理一定要在收到公司相关部门对此的审批决议之后才能开始提前实施的工作，同时在这种情况下,项目经理将承受来自公司内外的巨大压力，他的表现在一定程度上决定公司是否最终赢得合同。</p><p>⑵在第二种情况和第三种情况中,要邀请公司法律部参与，通过与客户签署备忘录等方式降低由于提前实施而带来的风险。</p><p>&nbsp;&nbsp;&nbsp;同时，在公司内部也要建立相应的审批流程对这种情况下的提前实施、进行批复。通常这种流程包括:</p><p>Ø&nbsp;由销售经理提出申请，阐明提前交付的内容和原因</p><p>Ø&nbsp;由法律部协助和客户签署提前实施备忘录。</p><p>Ø&nbsp;商务部门、项目管理部门经理对提前实施申请进行审查、登记并批复。</p><p>Ø&nbsp;由项目实施部门经理发布项目章程和项目经理委派书，启动项目实施。</p><p>Ø&nbsp;由项目经理根据销售部门的承诺，在实施过程中随时检查合同的签署情况，如果没有在计划的日期内签署，则要重新通过此审批流程。</p><p>【问题讨论4】&nbsp;降价对项目成本预算的影响</p><p>&nbsp;&nbsp;&nbsp;&nbsp;迫于市场竞争的压力，销售人员不得不一再降低报价，在这种情况下，公司分配给项目的预算也应该随之降低，是这样吗？</p><p>价格基本上由两大部分组成，即成本和利润。成本由项目的工作范围决定，只有工作范围发生变化的时候，成本才会发生相应的变化。如果公司决定降低价格，则与此对应的是项目的预期利润率降低,而不应该因此而削减已经承诺的工作范围和工作质量，即不应该削减项目的成本预算。</p><p>&nbsp;&nbsp;&nbsp;&nbsp;同时,在保证了预期项目范围和质量的前提下，项目经理可以通过其他科学的方法降低项目成本，为公司的利润做贡献，比如：可以使用更加科学的方式管理项目，避免问题的出现，减少项目成本风险预留的使用；还可以采取更加科学的、创新的工作方式，提高效率，降低成本。</p>', '2019-04-06 12:15:24', '	https://itmp-1259164243.cos.ap-guangzhou.myqcloud.com/demo.mp3', '', '2', '2', '五组');
INSERT INTO `case_info` VALUES ('10', '3', '项目可行性分析报告', '<p>【案例3】A公司是一家小型IT公司，公司与B大学初步商定，欲以B大学已通过鉴定的863项目“网络游戏监管关键技术研究”的主要成果为基础，双方合作开发“网络游戏监管系统”。因开发资金不足，A公司决定申请科技型中小企业技术创新基金。A公司组织有关人员编写了项目可行性分析报告，报告省科技厅审查。省科技厅高新技术处张处长仔细审查了项目可行性分析报告，发现有以下问题：</p><p>⑴关于“项目投资来源”，项目可行性分析报告中是这样叙述的：</p><p>1)项目总投资预算为250万元；</p><p>2)申请国家技术创新基金100万元；</p><p>3)地方政府已承诺，在项目立项之后按照国家实际批准基金支付额度为50%匹配地方资金(附地方政府文件)；</p><p>4)公司股东大会已通过决议，在项目立项之后为该项目投资100万元(附资金来源证明和公司股东大会决议)。</p><p>张处长认为，“项目投资来源有重大遗漏”。</p><p>⑵关于“项目技术来源”，项目可行性分析报告中是这样叙述的：</p><p>1)以B大学已通过鉴定的863项目“网络游戏监管关键技术研究”的主要成果为基础；</p><p>2)A、B双方合作进一步开发，完成这一研究成果的产品化。</p><p>张处长认为，“项目技术来源”还有几个问题需要明确。</p><p>⑶项目可行性分析只分析了项目技术的先进性，未分析项目技术的成熟性。</p><p>张处长认为，应当补充项目技术的成熟性分析。</p><p>【问题1】请分析“项目资金来源”有何重大遗漏？应如何改正？</p><p>【问题2】请分析“项目技术来源”还有哪几个问题需要明确？</p><p>【问题3】应从哪几个方面分析项目技术的成熟性？</p>', '<p>【参考答案】<strong>问题1：</strong></p><p>通常，一个信息系统项目的投资可来自以下几个方面：</p><p>⑴&nbsp;国家（或部，省，市）科技计划资金；</p><p>⑵&nbsp;地方（或部门）匹配资金；</p><p>⑶&nbsp;企业（单位）自筹资金；</p><p>⑷&nbsp;客户（用户）的委托开发资金或系统资金；</p><p>⑸&nbsp;银行贷款。</p><p>本项目中申请国家技术创新基金为100万元，但国家实际批准基金额度很可能会低于100万元，所以“项目投资来源”中应当说明：当国家实际批准基金低于申请额度时，如何补足二者之间的差额，以及由此所引起的地方匹配基金的额度。</p><p>应重新召开股东大会并讨论以下议题：当国家实际批准基金低于申请额度时，公司是否愿意补足二者之间的差额以及由此所引起的地方匹配基金的额度。</p><p>如果能通过，应在“项目投资来源”中加注：当国家实际批准基金低于申请额度时，公司承诺补足二者之间的差额以及由此所引起的地方匹配基金的额度（附新的公司股东大会决议）。</p><p><strong>问题2：</strong></p><p>A、B双方以B方现有技术成果为基础进一步合作开发，应明确以下几个主要问题：</p><p>⑴&nbsp;B方是以现有技术成果折价入股，还是将现有技术成果转让给A方？</p><p>⑵&nbsp;如果是“技术转让”，应明确是“专利权转让”、“专利实施许可”还是“技术秘密转让”？</p><p>⑶&nbsp;双方是否已就合作开发的新技术成果的所有权、使用权以及利益分成问题达成一致意见？</p><p>⑷&nbsp;双方是否已正式签订“合作开发合同”或“技术转让”合同？</p><p><strong>问题3：</strong></p><p>应主要从以下几个方面分析项目技术的成熟度：</p><p>⑴&nbsp;关键技术成熟性分析（包括采用的现有成熟度关键技术、已攻克的关键技术、待研究的关键技术等）。</p><p>⑵&nbsp;项目采用的关键技术是否获得国家、部门（省部级以上）或地方科技计划的支持（已获得、尚未获得）、计划的名称、获得支持的时间。</p><p>⑶&nbsp;项目采用的关键技术是否通过技术鉴定（已鉴定、尚未鉴定）、鉴定单位、鉴定意见、鉴定时间。</p>', '2019-04-06 12:19:32', 'https://itmp-1259164243.cos.ap-guangzhou.myqcloud.com/team5.mp4', '', '1', '1', '梁革英');
INSERT INTO `case_info` VALUES ('11', '1', '综合案例分析', '<p>【综合分析案例】Brightmouth学院是一个高等教育研究机构，过去由当地政府管辖，现改为自主管理。该学院的工资仍由当地政府管理，其工资单和其它支出由当地政府的计算中心给出，政府要收取这项服务的费用。学院管理方的意见是，如购买一个工资软件包商用产品，并由自己来处理工资，可能要经济一些。</p><p>⑴由学院处理工资单的项目的主要步骤是什么？</p><p>⑵此时，这个项目与从零开始编写软件的项目有什么不同?</p><p>⑽所描述的Brightmouth学院实现独立发放系统的项目是目标驱动还是产品驱动？</p><p>⑶标识出Brightmouth学院工资单项目中的目的和子目的。可以用什么有效性度量来检查是否成功地达到该项目的目的？</p><p>⑷该项目的相关人员有哪些？</p><p>⑸绘制Brightmouth学院工资单投标邀请的产品流程图和投标邀请的活动网络。</p><p>(6)列出下列标题他们可能考虑的一些成本。</p><p>Ø&nbsp;开发成本</p><p>Ø&nbsp;安装成本</p><p>Ø&nbsp;运行成本</p><p>列出下列标题下的效益：</p><p>Ø&nbsp;可量化和估价的效益</p><p>Ø&nbsp;可量化但不能估价的效益</p><p>Ø&nbsp;识别出的、不易估价的效益</p><p>对于每项成本和效益，从原理上解释该如何用钱来度量。</p><p>⑾在每一个工资年度之初，自动把人员的工资等级提高一档是Brightmouth学院工资管理系统的一个期望的功能。现在必须手工输入新的等级，并且要仔细进行检查。这项工作每年需要花费大约20小时的员工工作量，每小时为20英镑。系统X有这个功能但系统Y没有。系统X还有另一个功能，就是能自动生成显示每一个部门的工资费用的条形统计图。这种报告现在每年手工写两次，每次都要用12小时的工作量才能完成。在而系统Y中，部门名字的更换不需要对代码作出任何修改，但是系统X却至少需要客户支付300英镑。学院负责人估计，在系统四年的生命周期中，有50%的可能性发生这种情况。系统X要比系统Y贵500英镑。在以上信息的基础上，哪一个系统更有金钱价值？</p><p>⑿在Brightmouth学院，Brigette决定让学院财务进行新的工资单系统的用户验收测试，以确保用户通过使用新系统能够正确地完成其实际工作流程。由于财务部门的同事无法确定如何编写测试用例文档，Brigette起草了测试用例的工作产品描述。请写出描述内容。</p><p>⒀</p><p>⒁标识影响Brightmouth学院项目取得成功的主要风险，并按重要性对这些风险进行排序。</p><p>⑺Brightmouth学院的Brigette已经将市场上没有适用的工资单程序包的可能性标识为风险。在Brightmouth学院工资单项目上还可能有哪些内在的其他风险？</p><p>⑻Brightmouth学院的Brigette曾被告知，由于已经成功的安装了工资系统，因此要求创建一个子系统为分析每门课程的人力资源成本。每名员工所得的工资细节可以通过固定的工资数据得到。每名员工花在教每门课上的小时数可以通过固定的工资数据得到。</p><p>实现这项需求要做什么任务？试着标识出一个人可在一周或两周承担的任务。哪些任务是最难估计的？</p><p>⑼Brightmouth学院的Brigette负责的任务需要一个程序，该程序从工资文件中取出年薪，并从计时表系统中取出课程细节和每名员工每门课的课时数。该程序将计算每门课的员工成本并将结果存放到总会计系统读的一个文件中。该程序还将产生一个报告，来显示每名员工每门课的课时数及这些课时数相应的成本，计算这个子系统的功能点，假定报告是高复杂度的，而所有其他的元素都是中等复杂度。按照标准的转方法需要多少行Cobol代码来实现这个子系统？假设工作效率为每天50行代码，那么工作量估计是多少？</p>', '<p>【参考答案】</p><p>⑴由学院处理工资单的项目的主要步骤是:项目评价、项目策划、需求分析、规格说明、设计/编码，验证和确认，实现及维护/支持。</p><p>⑵这个项目与从零开始编写软件的项目不同之处为于：只需项目评价、项目策划、需求分析后，寻找满足需求的工资软件包商用产品后，安装调试使用，并获得卖方的支持即可。不需要做设计/编码，验证和确认的工作。</p><p>⑽这个项目实现上是目标驱动的。如果内部的工资单处理产生不了成本效益，那么该项目不应该试图实现这种解决方案。可以考虑满足目标集其他方法，例如，可能把这种处理以更低的成本承包给除地方当局外的某些组织。</p><p>⑶初始目的：“在维持当前范围和服务范围的同时，以较低的成本执行工资单处理。”</p><p>为了达到这个目的，子目的或目标做大致标识，例如：</p><p>ü&nbsp;在4月1日前将工资单处理转移到学院</p><p>ü&nbsp;在新系统中实现当前系统中已有的功能，不实现那些在初始报告中标识为不需要的功能</p><p>ü&nbsp;在初始报告标识的财务约束内实现工资单处理能力</p><p>应该注意的是：上面所列的目的并没有明确地提到进展过程中所需要的安排问题，以便处理硬件和软件维护、安全准备工作等。通过与涉及的各种不同的人讨论并努力达到目的，可以阐明真正的项目需求。</p><p>如上所列的子目的的有效性度量可能包括：</p><p>ü&nbsp;实现日期(date of implementation)&nbsp;新系统在商定的日期可使用吗？</p><p>ü&nbsp;设施(facility) 并行运行时，所有旧系统产生的输出也能由新系统产生吗？</p><p>ü&nbsp;成本(cost) 实际所花的成本与预算成本相比如何？</p><p>⑷该项目的相关人员可能包括：财务部门、人事部门、部门负责人、全体员工、场所管理人员、软件和硬件销售商。</p>', '2019-04-17 18:44:34', 'https://itmp-1259164243.cos.ap-guangzhou.myqcloud.com/team8.mp4', '', '1', '0', '佚名');
INSERT INTO `case_info` VALUES ('15', '4', '某企业的内部网络建设项目', '<p>某信息系统集成公司的项目经理李工承接了一家大型国有企业（甲方）的内部网络建设项目，接到该任务后李工组织项目组的相关人员对该项目工作进行了仔细分析，李工根据分析结果并结合自身的项目管理经验，得出该项目的总工作量为60人月，计划工期6个月。这样的成本估算和进度计划也正好能够满足甲方的合同要求，项目的相关计划也得到了公司内部和甲方的认可。</p><p>项目开始一个月之后，李工的直接领导，公司的项目总监找到李工说，由于公司其他项目出现了问题，因此要求李工要在5个月内完成项目，同时作为补偿，可以为项目增添两名开发人员。李工很为难，他没有当时就答应项目总监的要求，而是说考虑几天再给项目总监答复。</p><p>李工在之后的几天中，一方面在团队内部召开了几次会议，广泛听取大家的意见，同时也与公司出现问题项目的项目经理进行了沟通，基本明白了另外一个项目存在的问题和当前的状况，李工提出了自己的解决方案，将项目分为两部分来完成，第一部分任务是基本花费4个半月的时间，开发客户当前最重要和急需的系统；第二部分是计划历时2个月，开发客户需求的另外的功能。同时，李工还分别编写了相关的文档，描述了新的项目计划中各部分的主要工作、相关的验收标准和可能存在的项目风险等方面的问题。&nbsp;</p><p>&nbsp;为谨慎起见，李工在向项目总监汇报前，在项目团队内部对该计划进行了讨论，并通过甲方的项目经理进行了侧面了解，得知甲方应该有70%的可能性同意此计划。李工就找到公司项目总监，向其汇报了自己新的项目计划，项目总监觉得，如果按照新的项目计划实施，尽管项目工期可能会延长半个月，但是不需要再增添开发人员，同时还能够满足另外一个问题项目对资源的要求。大概能够为项目节约成本6万余元。项目总监在与甲方领导沟通和确认后，同意了新的项目计划。</p><p>&nbsp;最终项目按计划在没有增加人员的情况下顺利完成，客户对项目最终交付的系统也非常满意，项目组成员在项目过程中也非常愉快，没有感觉到太大的压力，而公司的问题项目，也由于获得了资源方面的及时支持，终于步入到了正常的轨道，并顺序结项。</p><p>【问题1】（4分）</p><p>结合案例，请分析案例中的项目取得成功的主要原因有哪些？</p><p>【问题2】（6分）</p><p>结合对项目范围控制和范围基准的理解，说明在本案例的变更中，与原来项目的范围基准相比，新的项目的范围是否发生了实质性的变化？</p><p>【问题3】（5分）</p><p>按照你的理解，请简要叙述在项目变更中项目经理的作用。</p><p>【问题4】（10分）</p><p>在本案例中，项目经理在没有取得项目总监意见的情况下，与公司其他项目经理进行沟通，并与甲方项目负责人初步沟通，是否恰当？请说明理由。</p><p>【问题1】 该项目成功的主要原因如下：⑴李工项目管理经验丰富，大局观强； ⑵李工的估算与计划做得合符实际情况；⑶李工能充分听取团队成员的意见，集思广益；⑷李工敢于积极主动地与公司同事、高层及甲方人员进行有效的沟通；⑸李工熟练掌握进度压缩的方法与技巧（特别是灵活运用分期交付）；⑹李工的冲突管理方法纯熟； ⑺该项目的文档工作做得充分、合理，有说服力。</p><p>【问题2】 范围基准包括范围说明书、WBS与WBS词典三大部分。新的项目的范围与原先相比，并没有发生本质的变化，原计划要做的工作仍然要完成，原来计划中不需要做的工作，将来也仍然不需要做。 只是在创建WBS时，需要按时间将工作分为两大板块，第一板块是前四个半月要完成的重要功能。第二板块是后两个月要完成的其他功能。这样便于后续工作的安排。</p><p>【问题3】项目经理在项目变更中的主要作用：⑴建立规范的整体变更控制流程，并确保流程的执行。⑵响应变更提出者的要求。⑶评估变更对项目的影响及应对方案。⑷将要求由技术要求转化为资源要求，供授权人决策。⑸根据评审结果实施即调整项目基准，确保项目基准反映项目实施情况。⑹做好变更控制中的沟通工作，指导做好相关存档工作。</p><p>【问题4】 恰当。因为项目经理有权利和义务与项目的相关干系人进行正式与非正式的沟通，而不是被动地等待上级指示。而且非正式沟通往往能使得气氛更融洽，解决问题更顺利。</p>', '<p>略</p>', '2019-05-19 13:03:31', 'https://itmp-1259164243.cos.ap-guangzhou.myqcloud.com/team5.mp4', '', '1', '1', '梁革英');
INSERT INTO `case_info` VALUES ('16', '5', '八项管理职责', '<p>【案例】Paul Duggan是软件开发部经理。星期二上午10:00，他和下属部门领导与集团经理开会，讨论明年的人员需求。Paul已经起草了一份题目为“邀请”的人事人件，这是根据他的部门明年的工作计划而作出的。这份文件在会议上进行了讨论。下午2:00Paul和他的高级职员开发，他的部门正在进行的一个重要项目。这项目有一名程序员出了车祸，将住院一段时间。为保证项目的进度，决定另一组(任务不紧迫的)一名组员调到这个项目，以临时替代不很紧要的工作，但这需要一周的时间来安排。Paul一方面必须打电话给人事部门，告诉他们关于人中替补问题，同时必须打电话给用户，解释项目可能延期的原因并且说明谁在做这件不很紧要的工作。指出在这天工作中Paul在不同时段所作出的响应，属于上面八项管理职责中的哪些职责。</p>', '<p>策划：来年的人员配置需求</p><p>进行陈述：在小组会议上；与人事经理沟通替换员工时；解释延迟交付给用户时。</p><p>控制、革新和指导：确定需要做什么来取得好的进行，不会因临时推动员工而影响进展。</p><p>人员配置：决定员工需要做什么；与人事部门讨论临时工的要求；策划来年的人员配置。</p>', '2019-05-19 13:07:40', 'https://itmp-1259164243.cos.ap-guangzhou.myqcloud.com/demo.mp3', '', '2', '0', '梁革英');

-- ----------------------------
-- Table structure for `chapter`
-- ----------------------------
DROP TABLE IF EXISTS `chapter`;
CREATE TABLE `chapter` (
  `chapter_id` int(11) NOT NULL AUTO_INCREMENT,
  `chapter_name` varchar(100) NOT NULL COMMENT 'name of chapter',
  `chapter_courseware` varchar(100) DEFAULT NULL COMMENT 'courseware of this chapter\n',
  PRIMARY KEY (`chapter_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of chapter
-- ----------------------------
INSERT INTO `chapter` VALUES ('3', '总论', 'https://www.91suke.com/s/47f075aa');
INSERT INTO `chapter` VALUES ('4', '项目管理和IT背景', 'https://www.91suke.com/s/275254ca');
INSERT INTO `chapter` VALUES ('5', '项目过程管理组', 'https://www.91suke.com/s/7ad176d0');

-- ----------------------------
-- Table structure for `class`
-- ----------------------------
DROP TABLE IF EXISTS `class`;
CREATE TABLE `class` (
  `class_id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id of class',
  `class_name` varchar(50) NOT NULL COMMENT 'the name of class',
  `class_num` int(11) DEFAULT NULL COMMENT 'the number of people',
  PRIMARY KEY (`class_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of class
-- ----------------------------
INSERT INTO `class` VALUES ('1', '信管151班', '31');
INSERT INTO `class` VALUES ('2', '信管161班', '0');

-- ----------------------------
-- Table structure for `notice`
-- ----------------------------
DROP TABLE IF EXISTS `notice`;
CREATE TABLE `notice` (
  `notice_id` int(11) NOT NULL AUTO_INCREMENT,
  `notice_title` varchar(100) NOT NULL COMMENT 'title of notice',
  `notice_content` text NOT NULL COMMENT 'content of notice',
  `notice_ctime` datetime NOT NULL,
  `notice_utime` datetime DEFAULT NULL,
  PRIMARY KEY (`notice_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COMMENT='of notice';

-- ----------------------------
-- Records of notice
-- ----------------------------
INSERT INTO `notice` VALUES ('3', '期末考试', '<p>各位同学： 期末考试于9月17日（周一）上午10:00发布，截止时间是10月7日（周日）23:30，持续时间为三周，范围为十讲的全部内容。题型全部为客观题，其中单选20题，多选10题，判断15题，满分100。共90分钟。请及时参加。 注意事项如下： 请各位同学一定要在考试规定的时间范围内参加考试。 一旦点击进入期末考试，请一定要完成考试再退出。不要点进去一两分钟浏览一下试题就退出，这种情况系统自动视为您已完成考试，成绩自动为零。（若出现此种情况，我们也无权限为您重新开放考试） 请大家考试时最好使用电脑。若使用手机或者pad，可能会出现突然断网的情况，再联网时系统会视您已完成考试。（同2，无法为您重新开放考试） 请各位同学谨记上述三点，认真做好考前准备！最后，感谢大家对我们慕课的支持！</p>', '2019-02-24 03:45:05', '2019-05-19 18:12:14');
INSERT INTO `notice` VALUES ('4', '期末考试将于9月17日（周一）发布', '各位同学： 期末考试于9月17日（周一）上午10:00发布，截止时间是10月7日（周日）23:30，持续时间为三周，范围为十讲的全部内容。题型全部为客观题，其中单选20题，多选10题，判断15题，满分100。共90分钟。请及时参加。 注意事项如下： 请各位同学一定要在考试规定的时间范围内参加考试。 一旦点击进入期末考试，请一定要完成考试再退出。不要点进去一两分钟浏览一下试题就退出，这种情况系统自动视为您已完成考试，成绩自动为零。（若出现此种情况，我们也无权限为您重新开放考试） 请大家考试时最好使用电脑。若使用手机或者pad，可能会出现突然断网的情况，再联网时系统会视您已完成考试。（同2，无法为您重新开放考试） 请各位同学谨记上述三点，认真做好考前准备！最后，感谢大家对我们慕课的支持！', '2019-02-24 03:45:05', '2019-02-24 03:45:05');

-- ----------------------------
-- Table structure for `reply`
-- ----------------------------
DROP TABLE IF EXISTS `reply`;
CREATE TABLE `reply` (
  `reply_id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id of reply\n',
  `topic_id` int(11) DEFAULT NULL COMMENT 'the topic id reply for',
  `from_id` varchar(11) DEFAULT NULL COMMENT 'who reply',
  `from_name` varchar(50) DEFAULT NULL COMMENT 'the name of who reply',
  `reply_time` datetime DEFAULT NULL COMMENT 'time of reply',
  `reply_content` text COMMENT 'the content of reply\n',
  `reply_to_id` varchar(11) DEFAULT NULL,
  PRIMARY KEY (`reply_id`),
  KEY `reply_to_id` (`reply_to_id`),
  KEY `topic_id` (`topic_id`),
  CONSTRAINT `topic_id` FOREIGN KEY (`topic_id`) REFERENCES `topic` (`topic_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of reply
-- ----------------------------
INSERT INTO `reply` VALUES ('6', '7', '12312312', '梁', '2019-05-21 13:26:34', '<p>ASDKL</p>', null);
INSERT INTO `reply` VALUES ('10', '12', '1511240134', 'lemon', '2019-05-21 16:35:34', '<p>dd</p>', null);
INSERT INTO `reply` VALUES ('11', '13', '1511240134', 'lemon', '2019-05-21 18:08:37', '<p>hhh   </p>', null);
INSERT INTO `reply` VALUES ('13', null, '12312312', '梁', '2019-05-26 18:11:27', '奥斯卡', '11');
INSERT INTO `reply` VALUES ('15', null, '12312312', '梁', '2019-05-28 11:31:23', '澳康达', '14');
INSERT INTO `reply` VALUES ('16', '15', '12312312', '梁', '2019-05-28 15:23:58', '<p>哈哈哈</p>', null);
INSERT INTO `reply` VALUES ('18', '17', '12312312', '梁', '2019-05-28 16:06:26', '<p>安佳佳姐</p>', null);
INSERT INTO `reply` VALUES ('19', '18', '12312312', '梁', '2019-05-28 16:46:50', '<p>反反复复</p>', null);

-- ----------------------------
-- Table structure for `section`
-- ----------------------------
DROP TABLE IF EXISTS `section`;
CREATE TABLE `section` (
  `section_id` int(11) NOT NULL AUTO_INCREMENT,
  `section_name` varchar(50) NOT NULL COMMENT 'name of this section',
  `section_video` varchar(100) DEFAULT NULL COMMENT 'video of this section',
  `chapter_id` int(11) NOT NULL COMMENT 'chpater ',
  `order_num` int(11) NOT NULL,
  PRIMARY KEY (`section_id`),
  KEY `chapter_id` (`chapter_id`),
  CONSTRAINT `chapter_id` FOREIGN KEY (`chapter_id`) REFERENCES `chapter` (`chapter_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of section
-- ----------------------------
INSERT INTO `section` VALUES ('2', '引言', 'https://itmp-1259164243.cos.ap-guangzhou.myqcloud.com/team3.mp4', '3', '1');
INSERT INTO `section` VALUES ('3', '项目及项目管理', 'https://itmp-1259164243.cos.ap-guangzhou.myqcloud.com/team5.mp4', '3', '2');
INSERT INTO `section` VALUES ('4', '项目群和项目组合管理', 'https://itmp-1259164243.cos.ap-guangzhou.myqcloud.com/team8.mp4', '3', '3');
INSERT INTO `section` VALUES ('5', '项目经理的作用', 'https://itmp-1259164243.cos.ap-guangzhou.myqcloud.com/team3.mp4', '3', '4');
INSERT INTO `section` VALUES ('6', '项目管理的系统观', 'https://itmp-1259164243.cos.ap-guangzhou.myqcloud.com/team5.mp4', '4', '1');
INSERT INTO `section` VALUES ('7', '干系人管理', 'https://itmp-1259164243.cos.ap-guangzhou.myqcloud.com/team5.mp4', '4', '2');
INSERT INTO `section` VALUES ('8', '项目声明周期', 'https://itmp-1259164243.cos.ap-guangzhou.myqcloud.com/team8.mp4', '4', '3');
INSERT INTO `section` VALUES ('9', '项目管理过程组及其映射只是领域', 'https://itmp-1259164243.cos.ap-guangzhou.myqcloud.com/team3.mp4', '5', '1');
INSERT INTO `section` VALUES ('10', '开发项目管理的方法学', 'https://itmp-1259164243.cos.ap-guangzhou.myqcloud.com/team5.mp4', '5', '2');
INSERT INTO `section` VALUES ('11', '案例研究：JWD咨询公司项目', 'https://itmp-1259164243.cos.ap-guangzhou.myqcloud.com/team3.mp4', '5', '3');
INSERT INTO `section` VALUES ('12', '过程组模板', 'https://itmp-1259164243.cos.ap-guangzhou.myqcloud.com/team8.mp4', '5', '4');

-- ----------------------------
-- Table structure for `student`
-- ----------------------------
DROP TABLE IF EXISTS `student`;
CREATE TABLE `student` (
  `student_id` char(10) NOT NULL COMMENT 'id of student',
  `student_name` varchar(100) NOT NULL COMMENT 'name of student',
  `student_pwd` varchar(50) NOT NULL COMMENT 'password of student',
  `student_class_id` int(11) NOT NULL COMMENT 'class id of studnet',
  PRIMARY KEY (`student_id`),
  KEY `class_id` (`student_class_id`),
  CONSTRAINT `class_id` FOREIGN KEY (`student_class_id`) REFERENCES `class` (`class_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of student
-- ----------------------------
INSERT INTO `student` VALUES ('1511240101', '敖富强', '123456', '1');
INSERT INTO `student` VALUES ('1511240102', '查皓天', '123456', '1');
INSERT INTO `student` VALUES ('1511240103', '王馨婉', '123456', '1');
INSERT INTO `student` VALUES ('1511240104', '李雨恬', '123456', '1');
INSERT INTO `student` VALUES ('1511240105', '漆治君', '123456', '1');
INSERT INTO `student` VALUES ('1511240106', '徐文彪', '123456', '1');
INSERT INTO `student` VALUES ('1511240107', '李甲成', '123456', '1');
INSERT INTO `student` VALUES ('1511240108', '赵钰锦', '123456', '1');
INSERT INTO `student` VALUES ('1511240109', '袁紫祎', '123456', '1');
INSERT INTO `student` VALUES ('1511240110', '史怡雪', '123456', '1');
INSERT INTO `student` VALUES ('1511240111', '邢飞龙', '123456', '1');
INSERT INTO `student` VALUES ('1511240112', '夏令飞', '123456', '1');
INSERT INTO `student` VALUES ('1511240113', '李威', '123456', '1');
INSERT INTO `student` VALUES ('1511240114', '韦陈宁睿', '123456', '1');
INSERT INTO `student` VALUES ('1511240115', '陈彩燕', '123456', '1');
INSERT INTO `student` VALUES ('1511240116', '吴家俊', '123456', '1');
INSERT INTO `student` VALUES ('1511240117', '黄嘉雯', '123456', '1');
INSERT INTO `student` VALUES ('1511240118', '龚晓蝶', '123456', '1');
INSERT INTO `student` VALUES ('1511240119', '覃佳萍', '123456', '1');
INSERT INTO `student` VALUES ('1511240120', '李顺燕', '123456', '1');
INSERT INTO `student` VALUES ('1511240121', '李泳万', '123456', '1');
INSERT INTO `student` VALUES ('1511240122', '朱梓言', '123456', '1');
INSERT INTO `student` VALUES ('1511240123', '周黄钧', '123456', '1');
INSERT INTO `student` VALUES ('1511240124', '甘雅丹', '123456', '1');
INSERT INTO `student` VALUES ('1511240125', '韦燕婷', '123456', '1');
INSERT INTO `student` VALUES ('1511240126', '陈静', '123456', '1');
INSERT INTO `student` VALUES ('1511240127', '饶健', '123456', '1');
INSERT INTO `student` VALUES ('1511240128', '陈虹羽', '123456', '1');
INSERT INTO `student` VALUES ('1511240129', '王何苗', '123456', '1');
INSERT INTO `student` VALUES ('1511240130', '郑俊杰', '123456', '1');
INSERT INTO `student` VALUES ('1511240134', 'lemon', '123456', '1');

-- ----------------------------
-- Table structure for `task`
-- ----------------------------
DROP TABLE IF EXISTS `task`;
CREATE TABLE `task` (
  `task_id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id of task',
  `task_content` text NOT NULL COMMENT 'content of task',
  `task_score` int(11) NOT NULL,
  `chapter_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`task_id`),
  KEY `task_chapter_id` (`chapter_id`),
  CONSTRAINT `task_chapter_id` FOREIGN KEY (`chapter_id`) REFERENCES `chapter` (`chapter_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of task
-- ----------------------------
INSERT INTO `task` VALUES ('5', '什么是项目？它的主要特征是什么', '10', '3');
INSERT INTO `task` VALUES ('6', '项目经理的作用是什么？项目经理应具备哪些技能？', '20', '3');
INSERT INTO `task` VALUES ('7', '对项目采取系统的观点有什么意义？', '10', '4');
INSERT INTO `task` VALUES ('8', '什么造成了项目管理与其他项目的区别？', '10', '4');
INSERT INTO `task` VALUES ('9', '请简述5个项目过程组。', '5', '5');

-- ----------------------------
-- Table structure for `task_score`
-- ----------------------------
DROP TABLE IF EXISTS `task_score`;
CREATE TABLE `task_score` (
  `task_id` int(11) NOT NULL,
  `student_id` char(10) NOT NULL,
  `student_answer` text NOT NULL,
  `student_task_score` int(11) DEFAULT NULL,
  `task_score_state` int(11) NOT NULL,
  UNIQUE KEY `task_score_pk` (`task_id`,`student_id`),
  KEY `student_id` (`student_id`),
  CONSTRAINT `student_id` FOREIGN KEY (`student_id`) REFERENCES `student` (`student_id`) ON DELETE CASCADE,
  CONSTRAINT `task_id` FOREIGN KEY (`task_id`) REFERENCES `task` (`task_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of task_score
-- ----------------------------
INSERT INTO `task_score` VALUES ('5', '1511240134', 'hhh', '5', '1');
INSERT INTO `task_score` VALUES ('6', '1511240134', 'fffff', '1', '1');

-- ----------------------------
-- Table structure for `test`
-- ----------------------------
DROP TABLE IF EXISTS `test`;
CREATE TABLE `test` (
  `test_id` int(11) NOT NULL AUTO_INCREMENT,
  `test_content` text NOT NULL,
  `test_A` text NOT NULL,
  `test_B` text NOT NULL,
  `test_C` text NOT NULL,
  `test_D` text NOT NULL,
  `test_answer` varchar(10) DEFAULT NULL,
  `chapter_id` int(11) NOT NULL,
  PRIMARY KEY (`test_id`),
  KEY `test_chapter_id` (`chapter_id`),
  CONSTRAINT `test_chapter_id` FOREIGN KEY (`chapter_id`) REFERENCES `chapter` (`chapter_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8 COMMENT='test of chapter';

-- ----------------------------
-- Records of test
-- ----------------------------
INSERT INTO `test` VALUES ('2', '（）是招聘方在招聘大学毕业生是寻求的顶尖技能。', '沟通', '项目管理', '财务管理', '客户服务', 'C', '3');
INSERT INTO `test` VALUES ('3', '（）不是项目管理三项约束的一部分。', '满足范围目标', '满足时间目标', '满足沟通目标', '满足成本目标', 'C', '3');
INSERT INTO `test` VALUES ('4', '项目组合管理签掉达到什么目标？', '战略', '战术', '内部', '外部', 'A', '3');
INSERT INTO `test` VALUES ('5', '（）不是系统管理的三球模型的组成部分。', '业务', '信息', '技术', '组织', 'B', '4');
INSERT INTO `test` VALUES ('6', '（）是主要的敏捷开发方法。', '极限编程', '冲刺', '六西格玛', 'Scrum', 'D', '4');
INSERT INTO `test` VALUES ('7', '（）是针对某一特定结果的一系列行动。', '目标', '过程', '计划', '项目', 'B', '5');
INSERT INTO `test` VALUES ('8', '（）是项目过程组通常最需要的资源和时间。', '启动', '计划', '执行', '收尾', 'C', '5');

-- ----------------------------
-- Table structure for `test_answer`
-- ----------------------------
DROP TABLE IF EXISTS `test_answer`;
CREATE TABLE `test_answer` (
  `chapter_id` int(11) NOT NULL,
  `chapter_test_answer` varchar(100) DEFAULT NULL,
  `test_total_score` int(11) DEFAULT NULL,
  PRIMARY KEY (`chapter_id`),
  CONSTRAINT `answer_chapter` FOREIGN KEY (`chapter_id`) REFERENCES `chapter` (`chapter_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of test_answer
-- ----------------------------
INSERT INTO `test_answer` VALUES ('3', '{\"2\":\"C\",\"3\":\"C\",\"4\":\"A\"}', '30');
INSERT INTO `test_answer` VALUES ('4', '{\"5\":\"B\",\"6\":\"D\"}', '20');
INSERT INTO `test_answer` VALUES ('5', '{\"7\":\"B\",\"8\":\"C\"}', '20');

-- ----------------------------
-- Table structure for `test_score`
-- ----------------------------
DROP TABLE IF EXISTS `test_score`;
CREATE TABLE `test_score` (
  `chapter_id` int(11) NOT NULL,
  `student_id` char(10) NOT NULL,
  `student_test_score` int(11) DEFAULT NULL,
  `student_test_answer` varchar(100) DEFAULT NULL,
  UNIQUE KEY `test_score_pk` (`chapter_id`,`student_id`),
  KEY `score_student` (`student_id`),
  CONSTRAINT `score_chapter` FOREIGN KEY (`chapter_id`) REFERENCES `chapter` (`chapter_id`) ON DELETE CASCADE,
  CONSTRAINT `score_student` FOREIGN KEY (`student_id`) REFERENCES `student` (`student_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of test_score
-- ----------------------------
INSERT INTO `test_score` VALUES ('3', '1511240134', '20', '{\"2\":\"C\",\"3\":\"A\",\"4\":\"A\"}');

-- ----------------------------
-- Table structure for `topic`
-- ----------------------------
DROP TABLE IF EXISTS `topic`;
CREATE TABLE `topic` (
  `topic_id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id of topic',
  `topic_type` int(11) NOT NULL COMMENT 'type of topic',
  `topic_title` varchar(100) NOT NULL COMMENT 'title of topic\n',
  `topic_content` text COMMENT 'content of topic',
  `topic_ctime` datetime NOT NULL COMMENT 'create time of topic\n',
  `topic_look` int(11) DEFAULT NULL COMMENT 'the number of look',
  `topic_reply` int(11) DEFAULT NULL COMMENT 'the number of  replay ',
  `topic_like` int(11) DEFAULT NULL COMMENT 'the number of people who like this topic',
  `user_id` int(11) NOT NULL,
  `user_name` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`topic_id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of topic
-- ----------------------------
INSERT INTO `topic` VALUES ('2', '1', '请问有人会画甘特图么？', '<p>拜托拜托！急！！！！</p>', '2019-05-19 14:55:38', '14', '0', '0', '1511240134', 'lemon');
INSERT INTO `topic` VALUES ('3', '2', '今天天气如何？', '<p>好不好？适不适合放风筝？</p>', '2019-05-19 22:47:42', '10', '0', '0', '12312312', '梁');
INSERT INTO `topic` VALUES ('4', '1', '什么是关键路径？', '<p>请在评论回答这个问题！</p>', '2019-05-19 22:49:17', '0', '0', '0', '12312312', '梁');
INSERT INTO `topic` VALUES ('5', '2', '什么是三球模型？', '<p>请在评论区回答该问题！</p>', '2019-05-19 22:50:42', '1', '0', '0', '12312312', '梁');
INSERT INTO `topic` VALUES ('6', '2', '求助！！！', '<p>第一章 课后讨论题第一题怎么写？拜托拜托！！！</p>', '2019-05-19 22:51:50', '0', '0', '0', '1511240134', 'lemon');
INSERT INTO `topic` VALUES ('7', '2', '求教！项目综合管理相关', '<p>什么样的变更控制适合大型项目？</p>', '2019-05-19 22:55:42', '40', '1', '0', '1511240134', 'lemon');
INSERT INTO `topic` VALUES ('12', '1', '啊啊', '<p>水电费费-当当当</p>', '2019-05-21 16:33:39', '5', '1', '0', '12312312', '梁');
INSERT INTO `topic` VALUES ('13', '2', '哈哈哈哈', '<p>嗯-33</p>', '2019-05-21 18:08:23', '16', '1', '1', '12312312', '梁');
INSERT INTO `topic` VALUES ('15', '1', '得得得', '<p>啊啊啊啊</p>', '2019-05-28 15:23:51', '3', '1', '0', '12312312', '梁');
INSERT INTO `topic` VALUES ('16', '1', '哈哈哈哈', '<p>顶顶顶顶</p>', '2019-05-28 15:41:32', '4', '0', '0', '12312312', '梁');
INSERT INTO `topic` VALUES ('17', '1', '卡卡卡的', '<p>啊啊啊</p>', '2019-05-28 16:06:18', '3', '1', '0', '12312312', '梁');
INSERT INTO `topic` VALUES ('18', '1', '反反复', '<p>凤飞飞</p>', '2019-05-28 16:46:35', '6', '1', '0', '12312312', '梁');

-- ----------------------------
-- Table structure for `topic_like`
-- ----------------------------
DROP TABLE IF EXISTS `topic_like`;
CREATE TABLE `topic_like` (
  `user_id` varchar(10) NOT NULL,
  `topic_id` int(11) NOT NULL,
  UNIQUE KEY `topic_like_pk` (`user_id`,`topic_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of topic_like
-- ----------------------------
INSERT INTO `topic_like` VALUES ('12312312', '13');
INSERT INTO `topic_like` VALUES ('1511240102', '2');
INSERT INTO `topic_like` VALUES ('1511240134', '9');

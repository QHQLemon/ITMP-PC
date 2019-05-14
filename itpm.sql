/*
Navicat MySQL Data Transfer

Source Server         : mydata
Source Server Version : 50725
Source Host           : localhost:3306
Source Database       : itpm

Target Server Type    : MYSQL
Target Server Version : 50725
File Encoding         : 65001

Date: 2019-05-14 11:25:04
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
INSERT INTO `admin` VALUES ('12312312', '梁', '654321');

-- ----------------------------
-- Table structure for `case_enshrine`
-- ----------------------------
DROP TABLE IF EXISTS `case_enshrine`;
CREATE TABLE `case_enshrine` (
  `user_id` varchar(10) NOT NULL,
  `case_id` int(11) NOT NULL,
  UNIQUE KEY `case_inshrine_pk` (`user_id`,`case_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of case_enshrine
-- ----------------------------
INSERT INTO `case_enshrine` VALUES ('12312312', '8');
INSERT INTO `case_enshrine` VALUES ('12312312', '9');
INSERT INTO `case_enshrine` VALUES ('1511240134', '8');
INSERT INTO `case_enshrine` VALUES ('1511240134', '9');
INSERT INTO `case_enshrine` VALUES ('1511240134', '10');

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
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of case_info
-- ----------------------------
INSERT INTO `case_info` VALUES ('8', '1', 'IT项目的特点与规划', '<p>【案例1】考虑下列问题：</p><p>Ø&nbsp;编辑一个版报纸</p><p>Ø&nbsp;在火星上投放机器人设备搜索生命迹象</p><p>Ø&nbsp;准备结婚</p><p>Ø&nbsp;改进财务计算机系统以处理通用的欧币问题</p><p>Ø&nbsp;开发优秀人机界面的研究项目</p><p>Ø&nbsp;对用户使用计算机系统时出现的问题的原因进行调查</p><p>Ø&nbsp;为计算领域学生分配第二年的编程任务</p><p>Ø&nbsp;为一台新计算机编制操作系统</p><p>Ø&nbsp;在组织中安装新版本的字处理软件包</p><p>其中，有些用“项目”描述可能比其他更合适。把它们按照最接近你的构成项目的概念的顺序排列起来，越在上面，越符合“项目”的概念。并说明与上一条作为项目的不同点。</p>', '<p>【参考答案1.1】答案不唯一，一种可能的顺序如下：</p><p>Ø&nbsp;在火星上投放机器人设备搜索生命迹象</p><p>Ø&nbsp;为一台新计算机编制操作系统</p><p>Ø&nbsp;改进财务计算机系统以处理通用的欧币问题</p><p>Ø&nbsp;在组织中安装新版本的字处理软件包</p><p>Ø&nbsp;对用户使用计算机系统时出现的问题的原因进行调查</p><p>Ø&nbsp;准备结婚</p><p>Ø&nbsp;开发优秀人机界面的研究项目</p><p>Ø&nbsp;编辑一个版报纸</p><p>Ø&nbsp;为计算领域学生分配第二年的编程任务</p>', '2019-04-06 12:07:52', 'https://itmp-1259164243.cos.ap-guangzhou.myqcloud.com/team3.mp4', 'http://ppdzfcm6e.bkt.clouddn.com/jQueryxin.pptx', '1', '2', '佚名');
INSERT INTO `case_info` VALUES ('9', '2', ' IT项目的立项与评价', '<p>【案例2】评论一下下面对软件开发者的“目的”的用词是否适当：</p><p>				⑴在预算内按时实现新的应用。</p><p>				⑵实现新的软件应用，并尽可能地只有少量可能导致运行故障的软件错误。</p><p>				⑶设计一个用户友好系统。</p><p>				⑷为新系统编写充分的文档。</p><p><br></p><p>【问题讨论1】&nbsp;关于项目章程和项目经理委派书</p><p>【问题讨论2】项目经理在参与售前支持阶段活动的过程中，由于所处的立场不同，有时候会和销售经理的意见发生冲突。这种情况如何处题？</p><p>【问题讨论3】有时候在合同还没有正式签订的时候，客户就提出提前进行项目的实施的要求。这种情况如何处理？</p><p>【问题讨论4】&nbsp;降价对项目成本预算的影响</p>', '<p>【参考答案2.1】在每种情况下要提出的意见和疑问是：</p><p>⑴实际时间和预算量要详细说明到什么样的程度？最终期限和预算约束通常必须按要交付功能的范围和质量来设置。例如：如果最终期限无法达到，那么客户愿意延期而要求交付完整的功能集，还是在最终期限时交付基本的功能子集？</p><p>⑵“尽可能地只有少量错误”并不准确。去掉错误需要工作量，因而需要钱。如果花许多钱和时间去减少错误，开发人员愿意吗？</p><p>⑶“用户友好”实际意味着什么？如何度量？通常“易于使用”是按用户执行标准操作所花的时间来度量的，而“易于学习”是按初学者在执行标准操作时达到精通的程度所花的时间来度量的。</p><p>⑷“充分的”文档意味着什么？也许用目标格式编排表示法来产生文档类型列表更有用。</p><p><br></p><p>【问题讨论1】&nbsp;关于项目章程和项目经理委派书</p><p>	项目章程和项目经理委派是一份文件吗？是在合同签订之前发布呢？还是合同签订之后发布?通常在组织中由谁发布?</p><p>【参考答案】项目章程的主要内容是宣布项日正式开始实施并强调项目所需达到的目标。项目经理委派书的主要内容是对已经宣布要实施的项目正式委派项目经理并明确其权力，有时候项目中其他关键角色的人选也在此文件中进行委派和授权。这两份文件通常在合同签订之后发布，但是由于某种情况公司同意在合同签订之前就开始项目的实施时，则在做出这种提前实施的决定之后就应该马上发布项目章程和项目经理委派书。通常，这两份文件由项目管理部门的经理发布；对那些级别很高或者有特殊意义的项目，则由公司的管理高层发布。有时候，项目经理委派书中的内容可以合并在项目章程中一起发布。</p><p>【问题讨论2】</p><p>&nbsp;&nbsp;&nbsp;项目经理在参与售前支持阶段活动的过程中，由于所处的立场不同，有时候会和销售经理的意见发生冲突。这种情况如何处题？</p><p>【参考答案】项目经理参与售前活动的目的是为项目的成功实施做好铺垫，同时通过自己的项目经验尽最大可能帮助销售经理赢得合同。一般来讲，项目经理和销售经理在配合当中发生冲突的主要原因是山于各自的立场不同造成的：销售经理的主要职责是完成销售额，项目经理的主要职责是完成既定的项目目标。在售前活动中，销售经理为了获取订单，容易做出不切实际的承诺，包括在进度方面、价格方面、性能方面等的承诺；而项目经理着重于日后项目的可执行性，所以对方案中不太现实的地方会据理力争，提出反对意见，以致造成冲突。针对这种情况，应该从以下几个方面进行考虑：</p><p>⑴统一目标&nbsp;无论项目经理还是销售经理,在售前活动中都要表现出团队合作的精神,不要只考虑白己的小团队利益,也不能只考虑眼前利益。大家的最终目标其实是一致的，即服务客户、让客户满意。</p><p>(2)群策群力&nbsp;&nbsp;对于出现的问题，大家应该集思广益、群策群力，寻找积极的解决方案，而不是互相推诿。</p><p>⑶在公司的流程中，扩大销售经理和项目经理的职责范围, 项目经理应该参与合同签订之前的工作,销售经理的职责也应该延伸到合同签订之后。有的公司在考评销售经理的绩效时包括了订单额、预期利润额、实际利润额、应收款项等诸多指标、通过这种方法保证项目的可实施性和公司业务的良性循环。</p><p>【问题讨论3】</p><p>&nbsp;&nbsp;&nbsp;有时候在合同还没有正式签订的时候，客户就提出提前进行项目的实施的要求。这种情况如何处理？</p><p>【参考答案】讨论：这种情况的发生有一定的普遍性，通常是出于以下几种原因：</p><p>Ø&nbsp;客户对卖方的产品或服务没有使用经验，不放心。希望能先“看货”，再决定“买还是不买”。</p><p>Ø&nbsp;客户已经选定了卖方，但是出于内部复杂的合同审批手续，使得合同签署不能马上完成。但是项目的工期要求又迫在眉睫，不得不要求提前实施。</p><p>Ø&nbsp;客户业务需求非常急迫，比如一些扩容项目，不马上提供相应的产品或服务，就有可能影响到他们的用户，或者是造成很大的经济损失。</p><p>	⑴在上述第一种情况中存在的风险较大，客户可能会对你所交付的产品和服务不满意而拒绝和你继续签订合同，导致你在前期的投入无法撤回而遭受损失。但是当今激烈的市场竞争又使你不得不去冒险，否则从一开始你就放弃了被选择的机会。在这种情况下，可以通过积极引导客户参观以往成功案例等方式增强客户的信心。另外一方面，公司内部相关人员要通过分析市场、客户等诸多因素，决定是否接受客户提前实施的要求，如果一旦决定，要明确提前实施的成本的底线值，项目经理一定要在收到公司相关部门对此的审批决议之后才能开始提前实施的工作，同时在这种情况下,项目经理将承受来自公司内外的巨大压力，他的表现在一定程度上决定公司是否最终赢得合同。</p><p>	⑵在第二种情况和第三种情况中,要邀请公司法律部参与，通过与客户签署备忘录等方式降低由于提前实施而带来的风险。</p><p>&nbsp;&nbsp;&nbsp;同时，在公司内部也要建立相应的审批流程对这种情况下的提前实施、进行批复。通常这种流程包括:</p><p>Ø&nbsp;由销售经理提出申请，阐明提前交付的内容和原因</p><p>Ø&nbsp;由法律部协助和客户签署提前实施备忘录。</p><p>Ø&nbsp;商务部门、项目管理部门经理对提前实施申请进行审查、登记并批复。</p><p>Ø&nbsp;由项目实施部门经理发布项目章程和项目经理委派书，启动项目实施。</p><p>Ø&nbsp;由项目经理根据销售部门的承诺，在实施过程中随时检查合同的签署情况，如果没有在计划的日期内签署，则要重新通过此审批流程。</p><p>【问题讨论4】&nbsp;降价对项目成本预算的影响</p><p>&nbsp;&nbsp;&nbsp;&nbsp;迫于市场竞争的压力，销售人员不得不一再降低报价，在这种情况下，公司分配给项目的预算也应该随之降低，是这样吗？</p><p>价格基本上由两大部分组成，即成本和利润。成本由项目的工作范围决定，只有工作范围发生变化的时候，成本才会发生相应的变化。如果公司决定降低价格，则与此对应的是项目的预期利润率降低,而不应该因此而削减已经承诺的工作范围和工作质量，即不应该削减项目的成本预算。</p><p>&nbsp;&nbsp;&nbsp;&nbsp;同时,在保证了预期项目范围和质量的前提下，项目经理可以通过其他科学的方法降低项目成本，为公司的利润做贡献，比如：可以使用更加科学的方式管理项目，避免问题的出现，减少项目成本风险预留的使用；还可以采取更加科学的、创新的工作方式，提高效率，降低成本。</p>', '2019-04-06 12:15:24', 'http://ppdzfcm6e.bkt.clouddn.com/case_music_demo.mp3', '', '2', '2', '五组');
INSERT INTO `case_info` VALUES ('10', '3', '项目可行性分析报告', '<p>【案例3】A公司是一家小型IT公司，公司与B大学初步商定，欲以B大学已通过鉴定的863项目“网络游戏监管关键技术研究”的主要成果为基础，双方合作开发“网络游戏监管系统”。因开发资金不足，A公司决定申请科技型中小企业技术创新基金。A公司组织有关人员编写了项目可行性分析报告，报告省科技厅审查。省科技厅高新技术处张处长仔细审查了项目可行性分析报告，发现有以下问题：</p><p>⑴关于“项目投资来源”，项目可行性分析报告中是这样叙述的：</p><p>1)项目总投资预算为250万元；</p><p>2)申请国家技术创新基金100万元；</p><p>3)地方政府已承诺，在项目立项之后按照国家实际批准基金支付额度为50%匹配地方资金(附地方政府文件)；</p><p>4)公司股东大会已通过决议，在项目立项之后为该项目投资100万元(附资金来源证明和公司股东大会决议)。</p><p>张处长认为，“项目投资来源有重大遗漏”。</p><p>⑵关于“项目技术来源”，项目可行性分析报告中是这样叙述的：</p><p>1)以B大学已通过鉴定的863项目“网络游戏监管关键技术研究”的主要成果为基础；</p><p>2)A、B双方合作进一步开发，完成这一研究成果的产品化。</p><p>张处长认为，“项目技术来源”还有几个问题需要明确。</p><p>⑶项目可行性分析只分析了项目技术的先进性，未分析项目技术的成熟性。</p><p>张处长认为，应当补充项目技术的成熟性分析。</p><p>【问题1】请分析“项目资金来源”有何重大遗漏？应如何改正？</p><p>【问题2】请分析“项目技术来源”还有哪几个问题需要明确？</p><p>【问题3】应从哪几个方面分析项目技术的成熟性？</p>', '<p>【参考答案】<strong>问题1：</strong></p><p>	通常，一个信息系统项目的投资可来自以下几个方面：</p><p>⑴&nbsp;国家（或部，省，市）科技计划资金；</p><p>⑵&nbsp;地方（或部门）匹配资金；</p><p>⑶&nbsp;企业（单位）自筹资金；</p><p>⑷&nbsp;客户（用户）的委托开发资金或系统资金；</p><p>⑸&nbsp;银行贷款。 </p><p>	本项目中申请国家技术创新基金为100万元，但国家实际批准基金额度很可能会低于100万元，所以“项目投资来源”中应当说明：当国家实际批准基金低于申请额度时，如何补足二者之间的差额，以及由此所引起的地方匹配基金的额度。</p><p>	应重新召开股东大会并讨论以下议题：当国家实际批准基金低于申请额度时，公司是否愿意补足二者之间的差额以及由此所引起的地方匹配基金的额度。</p><p>	如果能通过，应在“项目投资来源”中加注：当国家实际批准基金低于申请额度时，公司承诺补足二者之间的差额以及由此所引起的地方匹配基金的额度（附新的公司股东大会决议）。</p><p>	<strong>问题2：</strong></p><p>	A、B双方以B方现有技术成果为基础进一步合作开发，应明确以下几个主要问题：</p><p>⑴&nbsp;B方是以现有技术成果折价入股，还是将现有技术成果转让给A方？</p><p>⑵&nbsp;如果是“技术转让”，应明确是“专利权转让”、“专利实施许可”还是“技术秘密转让”？</p><p>⑶&nbsp;双方是否已就合作开发的新技术成果的所有权、使用权以及利益分成问题达成一致意见？</p><p>⑷&nbsp;双方是否已正式签订“合作开发合同”或“技术转让”合同？</p><p>	<strong>问题3：</strong></p><p>	应主要从以下几个方面分析项目技术的成熟度：</p><p>⑴&nbsp;关键技术成熟性分析（包括采用的现有成熟度关键技术、已攻克的关键技术、待研究的关键技术等）。</p><p>⑵&nbsp;项目采用的关键技术是否获得国家、部门（省部级以上）或地方科技计划的支持（已获得、尚未获得）、计划的名称、获得支持的时间。</p><p>⑶&nbsp;项目采用的关键技术是否通过技术鉴定（已鉴定、尚未鉴定）、鉴定单位、鉴定意见、鉴定时间。</p>', '2019-04-06 12:19:32', 'http://ppdzfcm6e.bkt.clouddn.com/course_video_demo.mp4', '', '1', '1', '梁革英');
INSERT INTO `case_info` VALUES ('11', '1', '综合案例分析', '<p>【综合分析案例】Brightmouth学院是一个高等教育研究机构，过去由当地政府管辖，现改为自主管理。该学院的工资仍由当地政府管理，其工资单和其它支出由当地政府的计算中心给出，政府要收取这项服务的费用。学院管理方的意见是，如购买一个工资软件包商用产品，并由自己来处理工资，可能要经济一些。</p><p>⑴由学院处理工资单的项目的主要步骤是什么？</p><p>⑵此时，这个项目与从零开始编写软件的项目有什么不同?</p><p>⑽所描述的Brightmouth学院实现独立发放系统的项目是目标驱动还是产品驱动？</p><p>⑶标识出Brightmouth学院工资单项目中的目的和子目的。可以用什么有效性度量来检查是否成功地达到该项目的目的？</p><p>⑷该项目的相关人员有哪些？</p><p>⑸绘制Brightmouth学院工资单投标邀请的产品流程图和投标邀请的活动网络。</p><p>(6)列出下列标题他们可能考虑的一些成本。</p><p>Ø&nbsp;开发成本</p><p>Ø&nbsp;安装成本</p><p>Ø&nbsp;运行成本</p><p>列出下列标题下的效益：</p><p>Ø&nbsp;可量化和估价的效益</p><p>Ø&nbsp;可量化但不能估价的效益</p><p>Ø&nbsp;识别出的、不易估价的效益</p><p>对于每项成本和效益，从原理上解释该如何用钱来度量。</p><p>⑾在每一个工资年度之初，自动把人员的工资等级提高一档是Brightmouth学院工资管理系统的一个期望的功能。现在必须手工输入新的等级，并且要仔细进行检查。这项工作每年需要花费大约20小时的员工工作量，每小时为20英镑。系统X有这个功能但系统Y没有。系统X还有另一个功能，就是能自动生成显示每一个部门的工资费用的条形统计图。这种报告现在每年手工写两次，每次都要用12小时的工作量才能完成。在而系统Y中，部门名字的更换不需要对代码作出任何修改，但是系统X却至少需要客户支付300英镑。学院负责人估计，在系统四年的生命周期中，有50%的可能性发生这种情况。系统X要比系统Y贵500英镑。在以上信息的基础上，哪一个系统更有金钱价值？</p><p>⑿在Brightmouth学院，Brigette决定让学院财务进行新的工资单系统的用户验收测试，以确保用户通过使用新系统能够正确地完成其实际工作流程。由于财务部门的同事无法确定如何编写测试用例文档，Brigette起草了测试用例的工作产品描述。请写出描述内容。</p><p>⒀</p><p>⒁标识影响Brightmouth学院项目取得成功的主要风险，并按重要性对这些风险进行排序。</p><p>⑺Brightmouth学院的Brigette已经将市场上没有适用的工资单程序包的可能性标识为风险。在Brightmouth学院工资单项目上还可能有哪些内在的其他风险？</p><p>⑻Brightmouth学院的Brigette曾被告知，由于已经成功的安装了工资系统，因此要求创建一个子系统为分析每门课程的人力资源成本。每名员工所得的工资细节可以通过固定的工资数据得到。每名员工花在教每门课上的小时数可以通过固定的工资数据得到。</p><p>实现这项需求要做什么任务？试着标识出一个人可在一周或两周承担的任务。哪些任务是最难估计的？</p><p>⑼Brightmouth学院的Brigette负责的任务需要一个程序，该程序从工资文件中取出年薪，并从计时表系统中取出课程细节和每名员工每门课的课时数。该程序将计算每门课的员工成本并将结果存放到总会计系统读的一个文件中。该程序还将产生一个报告，来显示每名员工每门课的课时数及这些课时数相应的成本，计算这个子系统的功能点，假定报告是高复杂度的，而所有其他的元素都是中等复杂度。按照标准的转方法需要多少行Cobol代码来实现这个子系统？假设工作效率为每天50行代码，那么工作量估计是多少？</p>', '<p>【参考答案】</p><p>⑴由学院处理工资单的项目的主要步骤是:项目评价、项目策划、需求分析、规格说明、设计/编码，验证和确认，实现及维护/支持。</p><p>⑵这个项目与从零开始编写软件的项目不同之处为于：只需项目评价、项目策划、需求分析后，寻找满足需求的工资软件包商用产品后，安装调试使用，并获得卖方的支持即可。不需要做设计/编码，验证和确认的工作。</p><p>⑽这个项目实现上是目标驱动的。如果内部的工资单处理产生不了成本效益，那么该项目不应该试图实现这种解决方案。可以考虑满足目标集其他方法，例如，可能把这种处理以更低的成本承包给除地方当局外的某些组织。</p><p>⑶初始目的：“在维持当前范围和服务范围的同时，以较低的成本执行工资单处理。”</p><p>为了达到这个目的，子目的或目标做大致标识，例如：</p><p>ü&nbsp;在4月1日前将工资单处理转移到学院</p><p>ü&nbsp;在新系统中实现当前系统中已有的功能，不实现那些在初始报告中标识为不需要的功能</p><p>ü&nbsp;在初始报告标识的财务约束内实现工资单处理能力</p><p>应该注意的是：上面所列的目的并没有明确地提到进展过程中所需要的安排问题，以便处理硬件和软件维护、安全准备工作等。通过与涉及的各种不同的人讨论并努力达到目的，可以阐明真正的项目需求。</p><p>如上所列的子目的的有效性度量可能包括：</p><p>ü&nbsp;实现日期(date of implementation)&nbsp;新系统在商定的日期可使用吗？</p><p>ü&nbsp;设施(facility) 并行运行时，所有旧系统产生的输出也能由新系统产生吗？</p><p>ü&nbsp;成本(cost) 实际所花的成本与预算成本相比如何？</p><p>⑷该项目的相关人员可能包括：财务部门、人事部门、部门负责人、全体员工、场所管理人员、软件和硬件销售商。</p>', '2019-04-17 18:44:34', '', '', '1', '0', '佚名');

-- ----------------------------
-- Table structure for `chapter`
-- ----------------------------
DROP TABLE IF EXISTS `chapter`;
CREATE TABLE `chapter` (
  `chapter_id` int(11) NOT NULL AUTO_INCREMENT,
  `chapter_name` varchar(100) NOT NULL COMMENT 'name of chapter',
  `chapter_courseware` varchar(100) DEFAULT NULL COMMENT 'courseware of this chapter\n',
  PRIMARY KEY (`chapter_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of chapter
-- ----------------------------
INSERT INTO `chapter` VALUES ('1', '第一章 总论', 'https://itmp-1259164243.cos.ap-guangzhou.myqcloud.com/chapter1.html');

-- ----------------------------
-- Table structure for `class`
-- ----------------------------
DROP TABLE IF EXISTS `class`;
CREATE TABLE `class` (
  `class_id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id of class',
  `class_name` varchar(50) NOT NULL COMMENT 'the name of class',
  `class_num` int(11) DEFAULT NULL COMMENT 'the number of people',
  PRIMARY KEY (`class_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of class
-- ----------------------------
INSERT INTO `class` VALUES ('1', '信息管理与信息系统151班', '1');
INSERT INTO `class` VALUES ('2', '信息管理与信息系统161班', '0');
INSERT INTO `class` VALUES ('3', '信息管理与信息系统162班', '0');

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
INSERT INTO `notice` VALUES ('3', '期末考试', '<p>各位同学： 期末考试于9月17日（周一）上午10:00发布，截止时间是10月7日（周日）23:30，持续时间为三周，范围为十讲的全部内容。题型全部为客观题，其中单选20题，多选10题，判断15题，满分100。共90分钟。请及时参加。 注意事项如下： 请各位同学一定要在考试规定的时间范围内参加考试。 一旦点击进入期末考试，请一定要完成考试再退出。不要点进去一两分钟浏览一下试题就退出，这种情况系统自动视为您已完成考试，成绩自动为零。（若出现此种情况，我们也无权限为您重新开放考试） 请大家考试时最好使用电脑。若使用手机或者pad，可能会出现突然断网的情况，再联网时系统会视您已完成考试。（同2，无法为您重新开放考试） 请各位同学谨记上述三点，认真做好考前准备！最后，感谢大家对我们慕课的支持！</p>', '2019-02-24 03:45:05', '2019-05-04 19:57:02');
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
  PRIMARY KEY (`reply_id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of reply
-- ----------------------------
INSERT INTO `reply` VALUES ('14', '5', '1511240134', 'lemon', '2019-04-16 14:16:04', '<p>啊哈哈哈哈</p>', null);

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
  PRIMARY KEY (`section_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of section
-- ----------------------------
INSERT INTO `section` VALUES ('1', '引言', 'https://itmp-1259164243.cos.ap-guangzhou.myqcloud.com/team3.mp4', '1', '1');

-- ----------------------------
-- Table structure for `student`
-- ----------------------------
DROP TABLE IF EXISTS `student`;
CREATE TABLE `student` (
  `student_id` char(10) NOT NULL COMMENT 'id of student',
  `student_name` varchar(100) NOT NULL COMMENT 'name of student',
  `student_pwd` varchar(50) NOT NULL COMMENT 'password of student',
  `student_class_id` int(11) NOT NULL COMMENT 'class id of studnet',
  PRIMARY KEY (`student_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of student
-- ----------------------------
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
  PRIMARY KEY (`task_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of task
-- ----------------------------
INSERT INTO `task` VALUES ('1', 'IT项目管理过程组分为哪几个？', '20', '1');

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
  UNIQUE KEY `task_score_pk` (`task_id`,`student_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of task_score
-- ----------------------------
INSERT INTO `task_score` VALUES ('1', '1511240134', '启动、计划、执行、控制与收尾', '5', '1');

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
  PRIMARY KEY (`test_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COMMENT='test of chapter';

-- ----------------------------
-- Records of test
-- ----------------------------
INSERT INTO `test` VALUES ('1', '( )是项目的主导目标。', '约束性目标', '激励性目标 ', '决策性目标', '成果性目标', 'C', '1');

-- ----------------------------
-- Table structure for `test_answer`
-- ----------------------------
DROP TABLE IF EXISTS `test_answer`;
CREATE TABLE `test_answer` (
  `chapter_id` int(11) NOT NULL,
  `chapter_test_answer` varchar(100) DEFAULT NULL,
  `test_total_score` int(11) DEFAULT NULL,
  PRIMARY KEY (`chapter_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of test_answer
-- ----------------------------
INSERT INTO `test_answer` VALUES ('1', '{\"1\":\"C\"}', '10');

-- ----------------------------
-- Table structure for `test_score`
-- ----------------------------
DROP TABLE IF EXISTS `test_score`;
CREATE TABLE `test_score` (
  `chapter_id` int(11) NOT NULL,
  `student_id` char(10) NOT NULL,
  `student_test_score` int(11) DEFAULT NULL,
  `student_test_answer` varchar(100) DEFAULT NULL,
  UNIQUE KEY `test_score_pk` (`chapter_id`,`student_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of test_score
-- ----------------------------
INSERT INTO `test_score` VALUES ('1', '1511240134', '10', '{\"1\":\"C\",\"2\":\"C\",\"3\":\"D\"}');

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
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of topic
-- ----------------------------
INSERT INTO `topic` VALUES ('1', '1', '2019琦玉世锦赛？', '求助！！！！！！！', '2019-03-15 03:48:05', '0', '0', '0', '3', 'kerry');
INSERT INTO `topic` VALUES ('2', '2', 'IT项目管理', 'IT项目管理分为几个模块？', '2019-03-19 15:45:16', '1', '0', '1', '6', '小H');
INSERT INTO `topic` VALUES ('5', '2', '测试主题', '<p>哈哈哈</p><p><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHkAAABGCAYAAADo1jsxAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAC4iSURBVHja7H13lF1V9f/n3PZ6m/fe9N4nvZOENHoJRJoFRfSrKOpPEGyAoKBYQBCBoIgKFhRUeoumkUp6b5NJpmd6f/PqLeec3x/vvslkMhMSDBbkrPUWa2Vmzjv3fM7e+7M/e58LefHj1+J0B2Uc+V4PMpx2AAStg4NoCQ1CFARQxlDk8yHdaQdlHO/jmAXgQVEQiroi0a/v7eh8WRKE9zQR5Rx5Hhd8NhsUUYTHYgHjJ6/9TOennIPzsfeAANAoRUwzQMh72wQOwKnIkAQBfNi/heJxjPxm6WwjQMzP2RzDFn0RgL8C8IFzWCXpobcbGlZGNS0skDMDgnEOiyTiyzNnnPX1/qeNswYyIQQ6o4jrxqjW8M8ALBICWRRnDAFsWovXaimu8PtnHentWy2L4hnNq1OKAq8HbqsCShlwhn//PwkyAHDOQTk/uyBzDi4IARl4LgVwalhlCXGDlq2oa1jtVJQzmjeq6bhl9gxYJAlRqn1oyadryX2JBAY1DThLGCddqkQKvZ5fEqAsNa1FEqFTBgAQBeKSBAJROH2na1CG8kAaLiguREI38EEfZw1kwbSOmK6flRjHARACVAYCN8mC8FFqege7LGN/Z9fODKez2GWx+OK6Ee2JxdEbT5zB4WG4srIMaXYbBhPqhyCfKdChhAqDsffMGo8zeYZMp7Mo2+n8CQMHB+BWFKyqb1j+tWUrvv7K9R99TYDL1xwKtTHOgTMIEYooYn5BPtT/ASs+qyBzM9UwGINqGBD+CZQ5AJVSlPrTHhII8VPGYRNFNA2E6m9dtuJWqyQmMp3O9EFN02t6euvOdP7Ly0swIT2IiPaBisUeABFRIJQQckLIPLuWTAjAOTrCUbzX3JWbq1tQmH9tgcdzrUYpCCEQBELvWb32u33x+JEvzZx2id9ude/t6DpY1z9wRiBnu1y4fc45SBgfKCv+FoCvCoQcDiXU62OG0ScMC5pnFWRREMDA0RWLQRHfu0BhlyR3VTDwE8oYOACPRcGf9x54fmV9w8tpdhuuKC+7WhZFbGhqXqkaRuxM5v/05Anw220Iqx8YK/45gNuSfEXKf2Tztmkr6hpWKcOM7KyCbDCGbKcTsYCeJE7vYQ6dMczLz7vNY7GUqZTCIopoG4y0/fSdzQ8ASFxRVppeFQxcF1ZV9kbN0ZfPZO5zcnNw/aQJiPwHAExOFnrey/haCmCBEEQ1PXa4u+eYahhQ37c8GYBFkuC2Wt8TyIxzyKJQVBbw36azZIpklSQ8vmXbI+3hyMESnw8fnzDuc16r1b+6vmH1rvaObac7t1OR8Z0Fc5HyDv/OwU2vFzfem3DEOIfbosySBOGB1F/bZRlv1zeuq+3rr3vfxRBFEsHB0RuLQzwD8sXNxS+pKL/TJkk+jVLYZBk729p3PLtv/+9FQvDR8VWBimDgFp1S/Hbn7icZ56ed/9xyzkwU+3z/EWRLIAQqZdjZ3g7NoGdEUmlSzrVeWFL4S0KIlXMOktw//szuPb/mgPG+gnw8/eFIGAakM9CTdc6Q4XBMynA6btQZAwEggPBHNm15WKesd1pWFhYU5n/DZ7Vmr6itX72yrvEfpzv3BcWFuHZcJWK6frp/MhfARAACB1bZJOno8ELAux30wXc5SCndPMvpRHskfEYklTKOikDa1+yyPN0wvZ1DUbC2oXHl2w2Ny9/3PDkVbQJ2G7qjUQhnoEIJFJiTl3unRRStCUrhUhSsaWhcuaq+8U2fzYqbpk8ePy49eGtU07SHN215kINHT2feHLcL95+/ELIogtPRrYZzDpL893kAfghgQSraWESx7U/7Dpx7uKen0SJK72JlDHZZxk3Tp0IRxVNWohRRRHcshm2t7bBKpweDRilK/b6i8kDancwEWCAEOqX6o1u2PcI54v8SkBnnsMsyvFZb8iFPA2eDMhR6vNOKvMmUSSCAwaj+2JZtjwCIzsvPExYU5D/itVrtS7dse3JnW/ua03WLN06ZhP5EAq2D4THXYjCOfI/nUq/F8hLj3D78Z7IoZG9sPjZ9ZV1Do00+9XaphoFZudmwiiLYaZDUccEAeqIRSMLpFUdUamBWTva9EhG8KqjJNRS8cLD65a0tbWv+JYrXUFwWRXAwxA09ZSHv/sDpgW+IoqBQg8IpK1h2pHbZ1pa2NTNzsvHVc2bekulyXryvo/PwzzZtfRCjxJ3RRpbLhfHBALqjsVMKYiIhklUSv89xIsACIWAMtHkg1BjVNMTexQ1zAPPy8uBQFAyq6rvG1nSHA9luN1JawKmYuEYpShy+c8YFAp9SKR1KWUOJxODjW7b9HID2LwMZAGRBgACC9nAU8rvkyzplyHW7Jxb6vNfqlEEgBBql+qObt/4i6LBrz1939VybLD0QUbXEHStX3zGQSDSd7jq6o1Hcs3rtu6YqBR6P+MsrLvVJggjKjJQFw2OxYumW7U/tbu/YdzrpzozsLHxu2hSEVfW0jMEmS2gYCKE9HDllXGacwyZJmJqVdTcIGcLMpShYumXbM0d6+7b9y7Tr4YtKdzowkFAhEDKmx+acgzKO84oKbhEJsVDG4FAU/P1o7Yr9Xd0rf73k8lyP1fJHDm794doN924+1rr8TNahUYrGgdC7/l7TQEh9aseup++cf+69LkWxAUBvPN756OZtTy/dsv0JjhO9r8dqwTm5OUgYBihjAAgsooh7Fs1LMd3TypMFQuCQZSQMA5ZT1LMTBkWJ17ew2Oe9IqXUKaKIxoFQ8y+371z6bl/5/oBsnjKrKIKZFH9UlwXAZVPy872ejxmmyzIY409s3fHzT02a4L6qquIFACV/3LPv90/u2LX0VC7pn2WLS7fueHp9U3N1nsdTQBlT93d2VbcMhg8DCJlLhcdqwZ3z5+KikmJku5yo7+tPlioJgUQI8r0epFzp6aSMhADn5udCpwyiQEBAIArCSftlMIb5hXnfopwN/cgmSXhi6/ZHe2Lx+rG+46rKckzJzHx/QObJOjCCTkey9DhKvEnGGYYZ2Vmft0qSR6MUdknC6vqGf2Q4HTu/f96Cl2RBnP3SwerX7lq55h4AgyNPbJk/DdOzs8A4R0TVhjiARAR0RaPY09F5Jml6aG9H19q9HV2pPdEBxFPxf1FhAX54wSKUB/yIaRoimo6opkM1joOsUwaRkNMWWwzGkel0oiqYBsoYGICOSBQcxw3DYByZLsfsXLfrUsOsodtkCbvaO3b/5cChP401933nLcAXp0+FLAjvGeQggEkCIbtEQegXR4knEiHQGMWRvr5R4w1jDHZF8eR73Z81zLw4bhiJvR2dr901/9y/pjucF750qPr1r/19xe06Y10pawKAi0qK8MXp0zA5Mx1emxUCEdDYP4COcBiimOQDKqX47a49SVY9hrvUGcPe4wdBNz8njYWFBfjd1VfCIooIJRJn1RhkQcA5ubkgJpFadrQWh7t7oJju22AM5+Tm3CoKgkgpTbl5/sjmrT9VDaN7NOn2rvlzMS0rEwldR5RzSOQM1BbzjFYCeFUAKnTKftwfT9w9GrniHCj2elHo8Yx6siljsMryR5yKkp+sPxNENS3yiYnjv10R8Bf/dufuZ+9c+fZ3NUo7UpsfdNjxzbmzceOUSWA8KbiEEipEQUBE0xDVdYhUOEHlqgj4xwTZYAw1vb14rfoI/rzvwKiMeFEKYElEVNPPvtdDst8MACTOMS49iLrefnCezLuDdkdFntv9EZ3RIeHj7YbGFStq618fPo9VknDbnFm4adpUOBQZUU0bytOlMzmZlHPkAT8kIBUWScJbR2tDz+zaM6qyxTjHhSVFKPB6hlp1RkQk4ZMTx980/PcDdnuAAN67V629f+nW7U8C6AOSWvvi8lLcOX8uKgMBDJzGmhnnUA0j6U5PQX7GB4OYkZWFq6oq8JU3/o66/v6hn6fZbHj0sovhsiiIaToI8EWebAk+CuAPhJAOkRCAEBDyz/fDGIwh1+VCodeD9kgUnHOMCwY+Z5Eke6pGr1GqPbZp688AxIaz+u+fvxDTszMR042TpFvpdLVczgFBIOkuRVnIzGa9A51dh3tj8VNIcAxWUcDIKGUwIN1pn+m1WedSU7lxKjKO9vQd+u7ba3+wvunYSgARABoB8NAlF+Jj48dBEID+ROKstdByAAnDgEYpcj1uPHrZxVhRV4+/HTyErmgUn548Ad2xKOoH+kEAX7nf/xOLJKVxziEQfDqm6RcOqokOEAKnLP9TjRLDc/N8rwc72zuQZrP5ygJpn0xZukNR8Gr14Te2tbWvTeXJj1xyIa4ZVwkCjFk+lfhpVkEY57BLlmxFEr0AoDOKrmis91SLjek6mkJhpIAcSgkoxey8nBsUURQThgGHImNVbcOyW/++/FsDCbXFPKVGodeDO+bNxXXjqzCoqmCU2whQBMAOoAdA41nAei6ALI0aq90WZeDGKZNwWVkJtre2IaJpWH60HpQxeG3W9HHBoC2lqiiiNL4/kfjMpmMtD3LOMT07CzNEcTi7FgBMAzDD5DAqgEMANgIYGFM3YAwlaT4Uet3IcDqW2GQ5Vzfl2Liuq49t2f4EAL3Y58N3FszFRyorkntzChylu1atPe3duHX2TOGSkmIhKT2KmJKZYd/Z1j7q72Y4nUPMl484LFZRSqvw+4e6PijjxtJt2x8fSKg1ZgbGK/x+/Pm6q5DncWMgkcgA8P8AXAOgGIACIApgB4CfAVj2HsANAHgSwLUCISShG8/u7+q6URIEyKKIgMOevCiQXB88VmuuLAi2VEMhAeCyKIUEgCKJmJSZDnp8o68DcDuAcwCMTICPAvgJgN9JggCBECiCkLyFwpk1oukT7bLcObcgb1Aiwmcx1MAo4bl9B//SHo6s/fSUibh99jnIdjtHhi4JgAWAA4BPFsWQVRI7pKpg4LQSd8oYZFEoEYggcFBIhCDX7S7x22wrbbJ80mmcm5cDr8V6Ut6oM4oCr+dyl8WSpVEKqyxjf0fn7t3tnRtSDLoi4Mefrv0IslxOhFT1IwR4FEDhiGW5AZwP4DwA3wXwo9HYa4qwpJ6EJdmmWxSEV8yCBBRRRNtgOPfhd7ZAFkXojGFiejoWFeZDpRScM2Q6HTmiIICazyOLAmp6evteqzmCy0pLkO/xQDUMD4DHAdwoEIIUiAZjMI57szIAzwiEFLQMDt4XSqhoDoUQ0XX4bTbvJaXFb1lEyVfo8XZQxrJTdXWdMpSk+Sa98PFrX5malSFqBhUSBhVtsqQQEKtAiIMQuAiIDYBVEgT71pbWu1fVNfxMum5c5Wm5aoEQcXF56e06NYYEj3J/2owZ2VmwjKiiUMaQ4XBApRSUsxPiOkBQEfBfn3IvFkHAm0eOvmQwFgOAUn/aEMBRXb8FwM9lURStkjTUkckBRHU9xR4JgB8SgjqBkL+katgiIaCco3EgNBTDGU/mmDku1+MEmMePFyHw1pHaF4erYzIRkOVMPkPCMJDjceUNr48TEDQOhJo7I1FUBQOQRdEfN4wXJELOsysKIpoabx4INUd1PZbpdGSnOx0ZMU0f8mqSINzbPDC4r66v7+VXDtdgd3snAPQvKiz44pSsjJnXVFVeX+D1mF6TIKrrkdK0tFyd0eLa3n7GwXXKeLw3Ho+qBh3oi8eODapaX0ck0t0bi3f1xGKdB7q6NzUNhCBpw046GYOcUMZRFQx8wm+3z0kYBgdAdEpR7PPOyHQ6JBBikBEgpzsdyHA6YHA2csISt8Wy0Dw4GFAT0ZV1DX9PpQH3LpqPfK8HAwn1ZhF43GmxoCUUOvaPo3XLD3R1HySEYG5e7rlXVpZfzTgXKWPgnMNvs90b0/TXOOdxkCTI/QkVy+vqk+3BPClzzsnLva7E5/uMZlqkVZJQ3d1T87eD1S8NX6bPbkVVegBx3YBKKTIcjuLhcc/gDEd6exsyHA5cUVHmiGraX+yyfF5c1yO/3bn7z387cOiN+v7+ZtWgmt9u93x51vTPfX7a5JvjZhuwwRgmZqTfF1ITy84vKkzs7+yGwZixtrFp1drGpneWVJQvTjF2iyThjhWr71zb2LTBYNwKgHJwgzGuRzRN48kU0zA9ITVtkJliDqTDPX1Dro2ZbOEE/ZdR5Lrcnrl5uQ/saGvfFtP1yLz8vPNVw0Cmy1lZmOarbBkcPDBc8GCMQxKEk273GZShLJC22CbLDp1S2GUZ7zS3bKvt7asGgAtLCrGgoACDCfVSiZAnHLKM5/YdePahjZuXtkcizeYD8Of3H3x+07Fjmx646IIHGKAwzmFXlMqmwcHpYVXdmBJnOOfIcjmHxBeXxeKdnZvzwDDXCVkQ8NjmbQ9HNO0EeawnFsPq+ibo1ADlwOzcnJzUpguEIKJq4UPdPbWLy0sRcNifZIxfeLinZ9+3lq++Z0db+1aTaFEAvCMSabv37XX35LqcWZeVly2JahoY53BZlIkhVZ1DCFmT53GjoX+AEpDIzTOmzqwM+CdHdR0WSURNT8+B12uOvqhRGhkGER/xYSM+QxsvXVJShIDdDoEI2NDUfBJL45xjYWHBfTZJyv3u6rU3LCoqOP+CosLz44YBiyBYclzOReGEesAiiSeYf1ckivZw+KSKU0Uw8BEybIPXNjb9nQO6IoqYnp2NhoH+vEKv9xmbJEoPbdzywMObtjyaSqeGlRil5/cf+u3VVZVL5ubnLYrrOqSknFmwqq5xY2r+kjQvyvxpMBiDRhkmpAf/n0tRSlI8wakoWN/YvPrVw0f+OrKgn+V0IqwmQBmHLAqKz2rJTYUeWRBQ39/fkmaz1X9r7pyvCoR8ekd72+bPvfrmVzoj0VoT4JHKSfjpXXt/dXFpyeWEEInzpCFkOB2zD3V1rZmVk4kslxNBux1XVpZdlSJxVknCG0mAO99r+iB5LRZ4rBYUp6WBcoaD3d2QTUugycL2+XPzc297bPPWX+3r7FqX5XJ6UzIk5RxVgcAl1V29T6gGRarexDmHQ5Fhl6WhQ8M4h0uxFOe5XefopsIV1rXEusamNUkrLsLMnCxik+QnXIqS9fiWbb98eNOWn5osemQCqAPQjw0O1ksCWZQCZntrm7G89ngf2+LyUowLBqFSCqciZxR4PLfqwzoqVIOqD76z+UHGeXhkN8mnJk6AzmhKHwi6LJas1L1rSRRQ29u/65KS4qo8r/vnW1va9n/ulTe/2BmN1gIYU6k50NW9oy0cbslwOgp1mgxXnKOori8Ev92GOXk5EAlxZLlci3WWLLuGEmp02ZHa1/6ZHFGinIMyBt0wkOl0mIxwyCAD5X7/7/Z2dB55eNOWnwBAdXfPvpCqDlgk0UsZQ5rddm7U0LKjut6WEgM4B7SwYTYPpMplBubl551nl2VH3DBgkUQc6ek7fKSn96AiilhcXoqg3f7pYp93yfLaulU/Wv/O/WZR4gR6nu5woNDngUgIqgKBXJ0mD4xGKd3a0jqEsCQISFCK1Q2NiOk6bpg88XNOiyU9bvZ5ORUFz+8/8LedprBwQn3Z60FLeBAapTCS13XSrZLkSYUezoHOaPTQksryx1sHw6EvvbHsS53RaM1Y2vcwF9cX0/VeAaTwuJ4gOCRBhMdiRUKnKPB4Zvqs1hKDJVuJNjYd23Skt+/AmQJrlSSUpPmS2cRwBp1ms8Fvs6Wsj1gk6TeM89xvr1h9RUTTjwFAezjS0tg/cGRCRvqshGHAY7X6MhzOeRubj/3NZrJsQoA0q22I8HACKIKIqmDgwiFWLYrY1d6+SWcsPjkzHRZBDAbt9p+0h8Nd316x+ttGsijBkjmijHn5efjs1EkI2O04FgpBFIRxpf60OQlqwC7J2NvRueNQd8/QZmS7nCj1+hAzdARsNmdVwP953ZQ4RUHAQCIRXrp1x9KRwFglCW5FQXV3LzjnSFAKqyQXpIQbAIhoWmJCemBaVTBwwWdffv3TdX39298dYKDY5+M2WR56DwMBoFMj2hoehEuR4VQUFPm8l0miAJ0xSIKAVfX1b51uJ0wqlFwzrhI3TZ+KCn8aRIGcWIUaEi6SjW33WyTxqrtXrb17W2vb6lQg1xnTq7t7dk3NzpyVMJILLfenXfLs3n1/U0RxSPifkpWFkjQfDMqSAogsuXPcrjkp0sM5sKWl9R2Y+nGhz3un12rNvmPl219pGQzvSX3f3LxcPHrZxchyOSEKBBplKA/4XZSxJznnLrP6Sh/etOUhjdIhV5nrdmNSZjrCqoZst/PSgN1ekmLUDlnGM/sPPlfX17/zpPKaww6P1TqU1xJCkO1ylo7QpoUFBQXXPLZ1+2Mr6xteGgsEt8VyQhOBz2pV7JLkSB10URBQ3zfQWtfXj4qAH4sK88WSNO/5OqUQCcGgqsbXNx1bc7oAT83KxA/OX4hZOdnQKIVqGLAQ6eRSIwHACfmC12a9+0979j/3m527fzHylB7o6t6bKm3rjKE4zTt7alamRRQElXCAgcMqieiNxcA5h8EY8hR3pVNRcg0z1oQ1Lb6nvXNvhtOBxeVlZRMy0r+6sr5h/YuHqv8MgGe7XLhtzix8pLIcdlmGahipzSoA8DsAC2RRhE2S+H1r1t37dn3jW0PPQAgKvR40DYSgUYpzC3I/kdroVF/Ub3bu/hVwcr9dRziClw5WD/0gYRg4v6iwZHiO7FAUZW9H556fb9r6U5NknaQpzszJwpy83KEKE2McDkX2y6KYxYbcPseRvr5DqX1n4GVui2UiY8l6/MGu7oN1ff017wbuzJxsfGH6VFxaVgJZEBDT9eO0e7i7TnkUAF9xKsrX19Q3rvvOqjV3mcz2hIc42td/SDVrm2bMKi70eopaQoOHJdOaKwN+WMyYrFOKiRnpMwVCxFS8bA4NNjUNhBovLClGmT/tTs658tjmbQ9xjkFJIHhqyWU4Nz8P/fFE6nKaHcDHOHC/QEiuS1EQUhMDd61cff/z+w/9bvhBnJgeRKbTgUE1AaskZabZbItS+rlDlvH7g9V/q+8f2Dtys+yyjI9UlEMWhSHCqFKKMn9aeaqSRpLo0B9veOfHMV0fVdP12azIdrvQEYkcn8cwMDUrc5JDln2qKXCEVDWyx+wfCzrsSBjGbEWSLKphQBYF7Grv2GYwdsqGsc9OmYyvz50FWRTRNfR9Sf/htliK7VZrizSscvJNAN+xiKKvurvn4OdfffMLccNoG0l8AKBlcLA5rKr9Vln2UcagiKLVZ7NODCXUw6nacm1fH5LBh0OjFNOys+anXJ6ZgtRSzqPn5ueWFaV5b3i7rnH9pmMtqwHg2/PmYl5enrUnFs8DUEoIWaSI4jWSQEolQUBcN9SVdfVv/3Tj5sf3dXZtMQ8iTR2gsoAfYU1HVNcwKydnidti8SfMUl1U09Rn9+x7ZjTrc1kUUM6hmcoU5RwuRXFkuZwlhika2RUZK+sa/rGmoenNsQozCwsL4LPZhqw4pZBNSE+/IrUHVknC5mMt2xsGBurssoyuaBRuq3XOcJ1ib0fnKRv0ZuRkYVy6Hy9XHwZlx7tJKOdwKkrG9RPHr1lRW/9xaVBV4bNZP0oIeQhmTPbbbd5p2VnRLS0tBjH1Xm3Ygjsj0Z7+RKIrV1F81HSBXqu1Ym/nEdgkCaIgYFFRAZyKAo0yBGy2OeUB/xJtGPGp6e6tyXW7MS8/9zaREOXP+w/8BkBcFkVYRBFrGpsWTsnKfJlxbk8YBhr7+4+0hyOrd3d07lpd37Bxb0fXXgD9ZopFU1LmksoylPm9iOsG7IpkrUoPfJUOu1e1rrFp3YGu7p2jhamLiouQ7XIN1b9VSjEjO/NTXqu1IPX8lHH69K49v0qpSSNHud+HEp8XqkEBk4hSzpHtdPrHp6dfnZpHEgW8XH34r5zDCDrsKPcHxFyXc1qqgSJhUKO2LykSjdFGjMvLShFwOE6omRMkX9AzLhi8o2UwzP7v1TcOSF3RmDwuGPwmN0+hRqnqs1ozHrr4/B/0xuM3ea1WyIKI2/+xEhuamlObFY1qet9wBUgWxPzuaAwCIRgXDOLC4mJQzmAwZs9wOH4hEDJUweGco2Vw8HBl0O+bkJH+mequnvrV9UlpUxYEvHCwGjU9fXRWTradAWjsH9h31fMvfjyiaXFzc1Xzc0JOOi0rE+ODAagGBWccM7Kzr89zuyfGhx2ufxyte220hsCqYBBTs7OgGXQIGLsspc3Jz/1OioTJooiWwcGmna0dm8fa/AWF+VDE42mo2ZyIWbnZX3JZlCzVMGCVJNT29B154/DRV1MELabrQY/VWkhNuTesqr3t4WjLWN8zLj2ISRnp0BiDdVinJ+Mcimgtn5yRfusty5bfplIakToikUKvzTrJVGD0W5ctv0UgRHxqyeVPBh2OLYSQ31pFEfcumo+r//ICwqoGuyxxg7GEMKyjIcvlDMzNy4UiifjEhPEo9nmhUQqR4HHKMVWjVBcIkVMW4lSUhk9MGHejTZIdrx6ueS6q6b0AENN1HOjqhiwI3ZRznXIm53ncBekOhxbRtDaTLNFR0hNcUVGWbAEmAjxWq3NqduadKcsRkmw1lmL0I8eVFaVwKwo0kQ5t1oT04HfssjxkxRZRQHV3z66oro1aR//a7Fm4qqocPbG42YxHoFIDjPPiSZkZXx+aRxLxxLYdPw9rWqckCChL8yHosBfJguBPKWF98Xj/QCLRPxbIV1dVIJRQEdZUDG96Njtylu7u6Kh9pbrmOQCQVINmWyTRyjnQOjjYtOxo7Rs6ZZGqYKD863PP+U0ooWqDhvHHyZnpuH3OOfjB2g2IJUV2OiI/E7e3tWNOXg6mZmUiomkQBeHHOuOf/+v+g09ePa7yM6IgyOAcKqW0P5EQpmdn3dwdjWqvHT5y0j3jrlisK6yqA3ZZDjotimdxeWnpb3ftqY+PcmmNkGQLTEc0mrwlKBBcWV52m89mK0/9viQI6AgNNrcOhk+62jk3PxdXVpQltXaTJAE4t9DnvT1hGBGBEKcpXGBXe8eW0TZ9SWU57pw/FzqlyPd4EDcMiIQgomlEEoQnJEFIMxiD26JgVV3j6hcOVj+fInsFXi+ync48SRTJ8QYBo294Sjh8XFxajJtnTMWR3j5Qs+U51ZhIQL4QtNsvvuWt5dclDKMv1VRpJSDgSYIUFgjpBsB+vP6dHxmMGbfPOecPOmNTBxLq92+eMW1AFkQsr6uFRRKtKeYoCQJaBsOhtnAEEzLSwQGXRZIeUQThpm+tWP2N1sFw7WenTflyVNOS8UbX+2flZi/Idburlh+tW36kt2//SSBHo92t4XDDuGAgyDnHnLycC4709q6IaBpqevrQE0u2OJWmpeH/pk2CLIiI6wZo8u7uuEmZ6Xd3R6IdLouSmbwPTNAZjXZGdT0y/HsmZ6bjL9ddDZo8fEn1zKBul0X+Q3VXzz5BEPSKgH+mQSlUavBdbR3bR651cXkpHr/8EiQMA4Z5/zklDXsslh8JgnAZZQwWSURvLN79vbfX3m0wFkqFrmf37sPnp03JsEricbLGecwiitwY0VWzpLIcj1xyITTKUOj1YnhLBuN8os9q+8XTu/b8cW3jcWIo1fT2hTlPXk2zybJnUWGBbdOxlkhY1QZ/unHzAzU9vTV3L5z3gyKv95qorj/xpZnT/np+cUGLTZK9KR2YJ5WwQ49fdrHtuvFVH9UZvacjHPPcv27Dza9U1zxzdVXFZWRYwUMRBPnC4qIbOIDXa47+bTQxQafM2NfZtWNKZuasiKZhXDBwzfTszB8AJDoxPR2SIGBBUQGmZmbAJkuo6+2HwRgY51Khz/OH6q6eum2tbWtumj71q8nXThFQxlRCyFBl7JzcHPzogkXJuGkKEBwgTkV+RjVo4VM7dt1w94J5DzPGIIkCuiLRlsM9PSeQocvLS/GLxZcC4McFFDMWA7gFwF2cc4gCgSyIxndWrbmztq9/x3FGbwEIYJEkbwqvpN5IBJ/NCmlYOnfj5Em4ecY0KJKYJHYnClkZLovl5d3tHfU/Wr/xe8N5h1TT3dsWN4xBWRQ9Qbs9d1JGRklHJLp3b0enDiD82uEjL24+1rLzizOmfeaqqorb7W73dzKdzv0qpYV8WA547bjKT3qslk8c7e2zv374yFtP797zp/ZwpM4EUBterBYFwWOTZU/b4GDH2w0NK8eKOytrG5Z/auKErzDO4bPZSqdkZn5qf2fXr7NcLiypLEO2y4mIpiOuG8j1uM25yeOSIM64a9WaRbNzc+alLMpgDOkOh2dmdhZ0xnDzjGm4vLwEAEHcMIaWJxKy1KHI137rjVVf6Y7FO3M97pyIpsEiSqjp6TvYF090D7fgXyy+FCAYpSMV3wTwUIoPOBUF961Zf/9ryYoXS9WJXRZLMq6SYS2vnEMUBG9lwC9YJIkldANXj6vExyaMQ0zTkDDoyNp/ml2WX+uLx9NvXbb8ylBCPXZCqbEtHGmt6+s/NDEjfQ7jXDmvqOD6mK7t7Y3F0DIY1gGEu6Kx2h+u2/jjJ7fvfGZGdtbEm6ZNuWlOfq4zrhsQBYKopof+vO/Am9vb2nbtaG3fH1LVPpP5Rs2igqZTdoLEZ5FEbGg6tqInFj82FsgbmpvXV/f0HCgP+CdoBsX49OA9mkFfyXa5uu2KjLCqDc3HklLsfXZZ/vLdq9bes6ejc9349GA+H0YOgw57aWmaL2NWbk7ndeMqMaCq4Mev8XhFQVjqVOQbHtq4+cEXDx1+8p6F535TEJK9pjIRsLO9fVMKtO8tmo8bJ08cKqEO33Czh+uLKbftkGX+k/XvPPjLbTuXmvuSlIgpxbHBEAzKMJhIhFLZSlJgcmQRQjyHe3r7PzNlEj46vgqDicRJr+ngQJ5FFF/QKZt2y1v/+OSh7p4tI5U8QWdUf6PmyEs2SUKy28P3pUWFheN/vWQxvn/eApSk+ZgpNvT3xuL1m4+1vigQooMnV+pSLHil+vDzD2zcdP/q+saVIVVtM/PXcOrLumOxfp3Soff+EhOU1w7XvHSqZD+uGwNPbd/9hFVMliytkpQ3NSvzl7kelySSE27+BwRCfuOxWu59YuuOJ0wpFhubjm3qT8QHJEEw9XPZf+vsmQ9fXl6aNZBIpNy2nwOftMvyVkkgN9yzau09D72z5cEctwvnFRXOUU0r1xnj21ratgDAzy69ELecM3NI1k2pnQBuNLsxv5hMjRQYjA584x8rv/nzzdseNveEDmfCMU2HRilqevrqUm7ZFGGyFhYWnJv0OKVDUuWIrp3LHLK8KWEYE7/85rLPrmloWjZaoUQCgL8cOPTXGydP+nKux13CDcMzKzf7OYGQayZnZtR9fOJ47GnvwLKjdUae221cVVX+7UyX8+KYpsMmy2gLh9ue3L5rqZm/jioQbGhqbo1qeo/LomQa5v3lxv5Q7ZaWto3vpsu+dKj6L1dVlV99UUnRJf0JFRZZug6c+zjnTwGIc2C2IoqfsUtS7tLN2x/9wboNPzEPJZpCobrf79r35B3z597VF4+n2pJuoIxfxIEakqy0VVolKXiwq/vwvWvWfWxdY/MqAINFXq8rz+2ZrtNkNag7Gu3c29m5/3PTJlv/b+rkou5oTABgA5AP4FwAiwFUiIIAmySBEGB9Y/OqH63f+Mjejq7Nplcbs5q0q719V08s1uW0KOkGZTA4x3XjKh9wKEqDztjBYQRMRrLB/yteq/WTjf39x255a/kntra2rRnuJU4CuT+eaPnemnX3/O7qK/+oiKKsUjqJAOsB/FIWhNXzCvJDi4oK8gnIp+KG8em4psOuKDAYi35j+apvtIXDh08FVE8s1rO3o3PLkqryqyKqBpdFwWNbtj0f0bS+07i1MXjHirfvzP3oVYVVwUBFOKGCARcQQi6QBAF2WUZ3NBq6Z9Wab/xp34FnzZ7m1GaSn23a8rjLYgncOGXCjRZJspjGkgEgI2EYONrbV/PCweon/rR3/0thTWsBEM1zu+nCwvwJsijkG4zBKks41N2zO64bHRkOx6SeaPx1t8VSMNoNiP54omd9Y9O2vx449PLfj9atAdBt9pGf8rpjRyTa+qe9B56+c/6cu3rjCfNNSOJ41TA28SQW7RzwCISMs0nSBEIIXquuefXeNet+3BaOVJvfwcbqtk391/7R8VWf/eEFi+5Ls9kCMV0fSgfMmwwKIQSKKMIqiajt7T9658rV961tbH7N/IJTdukXeb0z71k47+6gw+5bU9+49YntOx7TKWs9zSqaJc/tnnrvefPvWFhYeIFFEl2cc9oVjbaurm9c+dSOXc829A/sMy14pLtSAPinZWXOmV+QN8ttsWRwwOiOxlr3dHQe2tvReTBhGJ2mF4qJhPCPTajC4vLSOxYWFj6QMAx4LBY8uHHTPT/btPVHAOSytLQZ5xbkLsh1uwo5iI0AWiih9hzp7W080NV9uHUw3GQ2PCTG8m6jDUUUsx66+IKfXT9pwvV8hJQsCskWX9Wg2NXeseWp7bueXna0drl5leiU+z88hosAXGVpadM/P33y9efm583PcDhzZFFwmP6fRjWtr6F/oH5Fbf2K5w8cfLU3Fq8bXhx4l+EwSYlixqZQ6p7Tad21M/++zJ9W4bNaMwzG4o0Doea+eLzFXMOprEUxq1jKsEY4OsT8k2BQALi4pAiTM9KxuKJ8eaHPe7FBKSySxD/5wisXbmg+9rbp/Rym2xTN+fiwTknDfC4NZ/4uNgVAxuKy0kuvqCi7uNDrKSeEWAAYvbFY+4Gu7oNrGpre2dratptz3mseoMTpbB5GAO0A4LDLcnqe253lUGQPBwjnXOuKRnvaw5F2niRWKfbMz/AhBNPaKM58WABYh22sMUbT3Ji3d4aBzEa6t+nZWfjSjGmwimL2rLyc/aIgpEmEoDsWa77oD89NH0gkekbMNfz/xsDGcpfv4RkdAOwiIS6SlIINg7H4sH43daz4O2qP18gQaLqZWEzXB2t6exuGPUyq7VM3v+S9PNA/+6YA9Qysf9R7AmOtuzLgx5KKMtT3D6DY511glaQ0jVIosoQDXd07RwCMswToWM+oAYhQzvvA+fC9N86kFWgskIc4xHuZ7L91OBQZl5eVQhIEEBgo9HouP17SE7C5uWXDv3hJ3AT6rLw+Q8L/+FBEEZeWliBm6OjrjcOhyN4st+sCatZ1Y7qub20dvXL13zL+p0H2Wq24orwUfrstWRYVBBR6vQvdipKdekNvXX//kZqesYv3H4L8HzxskoQrKkpR5E12cVglCZpBMS0787oUm1EkCTvaOjYmDCP8Icj/ZWN2Xg6unzgePqvNfHtPMgoSQoJBu+Oi423DHBsam1f/tz/v/xTIoiBgRnYmyv1pONDZZYoNyQwoYehYVFR4WZrdmhHXDUiEoDsa7dra0rrlQ5D/Q8fINwFmu12YlpWJ0jQfVIOmZEOTy3I4FRmTMzI+maooWWQZ65uObe6Mjt1n9SHI/8aRZrfh2spyAMcbBJwWBQIIErphvkv7uJRgMI4Ml6Myw+lYmGo2FAnB6obGvwP/9hfdfwjyaBZ89/xzMSE9eIL2m/x/R40hCiRf/HKNIBCrYb5VrzceD61taHr7g7AnHziQqwIBtIYG0dg/cFq/z5JXU6XPTJ10VeoQ2GQZG5qaNzSHQnUfgvwfNmRRQJbLgYM9PSfcKDjVMBhDaZqvzK0ok1KuWiAEr9ccfRHvn3T5IcjvdRiUYV1j8xkH0ZI0n9cuK5a4oUMRRTT09zesqm9Y/kHZF+GDBDJHsh3HOMPPs3v379nZ1rbWb7fBY7XiuX0HfhtKqB34cHygBilJ881581Mf3/qbJYtft0tS9gfq4T7Ed2g4CJBjvi6pFe/fC9Q/HP/mA29Fsmj/gRr/fwBKBnl0u0gC2gAAAABJRU5ErkJggg==\"></p>', '2019-04-13 21:32:07', '24', '0', '0', '6', '小H');
INSERT INTO `topic` VALUES ('12', '2', '嗡嗡嗡', '<p>电费卡士大夫加速度快</p>', '2019-04-16 21:42:55', '46', '0', '0', '1511240134', 'lemon');

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
INSERT INTO `topic_like` VALUES ('1511240134', '2');
